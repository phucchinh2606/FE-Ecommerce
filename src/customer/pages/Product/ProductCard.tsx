import React, { MouseEvent, useEffect, useState } from "react";
import "./ProductCard.css";
import {
  Button,
  Snackbar,
  Alert,
  CircularProgress,
  Tooltip,
} from "@mui/material";
import { Favorite, ModeComment } from "@mui/icons-material";
import { teal } from "@mui/material/colors";
import { Product } from "../../../types/ProductTypes";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../State/Store";
import {
  addProductToWishlist,
  getWishlistByUserId,
} from "../../../State/customer/wishlistSlice";

// const images = [
//   "https://product.hstatic.net/200000551679/product/untitled-16-06_aacd891e6b954a7999e355123442b139_grande.jpg",
//   "https://file.hstatic.net/200000551679/file/mc_minh_ha_1_94f5d7f4e1ff4a01a133e38d61f122c3_grande.png",
//   "https://file.hstatic.net/200000551679/file/photo_2022-06-02_16-04-32_88973c036519496782b3717a89768373_grande.jpg",
//   "https://product.hstatic.net/200000551679/product/z6495019694860_38c3e44d360b17c475d3365eeef961c7_d4faf4ab541343ad9c0f700df15e44b9_1024x1024.jpg",
// ];
const ProductCard = ({ item }: { item: Product }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState<"success" | "error">(
    "success"
  );
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { loading, error, wishlist } = useAppSelector(
    (store) => store.wishlist
  );
  const { isLoggedIn } = useAppSelector((store) => store.auth);

  // Kiểm tra xem sản phẩm có trong wishlist không
  const isInWishlist =
    wishlist?.products?.some((product: any) => product.id === item.id) || false;

  useEffect(() => {
    let interval: any;
    if (isHovered) {
      interval = setInterval(() => {
        setCurrentImage((prevImage) => (prevImage + 1) % item.images.length);
      }, 1000);
    } else if (interval) {
      clearInterval(interval);
      interval = null;
    }
    return () => clearInterval(interval);
  }, [isHovered]);

  // Load wishlist khi component mount nếu user đã đăng nhập
  useEffect(() => {
    if (isLoggedIn && !wishlist) {
      dispatch(getWishlistByUserId());
    }
  }, [isLoggedIn, wishlist, dispatch]);

  const handleWishList = async (event: any) => {
    event.stopPropagation();

    // Kiểm tra đăng nhập trước
    if (!isLoggedIn) {
      setSnackbarMessage(
        "Vui lòng đăng nhập để thêm sản phẩm vào danh sách yêu thích"
      );
      setSnackbarSeverity("error");
      setShowSnackbar(true);
      // Chuyển hướng đến trang đăng nhập sau 2 giây
      setTimeout(() => {
        navigate("/login");
      }, 2000);
      return;
    }

    if (!item.id) return;

    try {
      const result = await dispatch(
        addProductToWishlist({ productId: item.id })
      ).unwrap();
      // Kiểm tra xem sản phẩm có trong wishlist không để hiển thị thông báo phù hợp
      const isInWishlist = result.products.some(
        (product: any) => product.id === item.id
      );
      if (isInWishlist) {
        setSnackbarMessage("Đã thêm sản phẩm vào danh sách yêu thích!");
      } else {
        setSnackbarMessage("Đã xóa sản phẩm khỏi danh sách yêu thích!");
      }
      setSnackbarSeverity("success");
      setShowSnackbar(true);
    } catch (error: any) {
      setSnackbarMessage(
        error || "Có lỗi xảy ra khi thao tác với danh sách yêu thích"
      );
      setSnackbarSeverity("error");
      setShowSnackbar(true);

      // Nếu JWT token hết hạn, chuyển hướng đến trang đăng nhập
      if (error === "Phiên đăng nhập đã hết hạn, vui lòng đăng nhập lại") {
        setTimeout(() => {
          navigate("/login");
        }, 3000);
      }
    }
  };

  const handleCloseSnackbar = () => {
    setShowSnackbar(false);
  };

  return (
    <>
      <div
        onClick={() =>
          navigate(
            `/product-details/${item.category?.categoryId}/${item.title}/${item.id}`
          )
        }
        className="group px-4 relative overflow-hidden"
      >
        <div
          className="card relative overflow-hidden h-[300px] w-full"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {item.images.map((item, index) => (
            <img
              key={index}
              className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-300"
              src={item}
              alt=""
              style={{
                transform: `translateX(${(index - currentImage) * 100}%)`,
              }}
            />
          ))}

          {isHovered && (
            <div className="indicator flex flex-col items-center space-y-2 absolute bottom-4 right-4 z-10">
              <div className="flex gap-3">
                <Tooltip
                  title={
                    isInWishlist
                      ? "Xóa khỏi danh sách yêu thích"
                      : "Thêm vào danh sách yêu thích"
                  }
                >
                  <Button
                    onClick={handleWishList}
                    variant="contained"
                    color="secondary"
                    disabled={loading}
                  >
                    {loading ? (
                      <CircularProgress size={20} sx={{ color: "white" }} />
                    ) : (
                      <Favorite
                        sx={{
                          color: isInWishlist ? "red" : teal[500],
                          transition: "color 0.3s ease",
                        }}
                      />
                    )}
                  </Button>
                </Tooltip>
                <Tooltip title="Bình luận">
                  <Button variant="contained" color="secondary">
                    <ModeComment sx={{ color: teal[500] }} />
                  </Button>
                </Tooltip>
              </div>
            </div>
          )}
        </div>

        <div className="details pt-3 space-y-1 group-hover-effect rounded-md">
          <div className="name">
            <h1>{item.seller?.businessDetails.businessName}</h1>
            <p>{item.title}</p>
          </div>
          <div className="price flex items-center gap-3">
            <span className="font-sans text-gray-800">
              {item.sellingPrice} VNĐ
            </span>
            <span className="thin-line-through text-gray-400">
              {item.mrpPrice} VNĐ
            </span>
            <span className="text-primary-color">{item.discountPercent}%</span>
          </div>
        </div>
      </div>

      <Snackbar
        open={showSnackbar}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert onClose={handleCloseSnackbar} severity={snackbarSeverity}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </>
  );
};

export default ProductCard;
