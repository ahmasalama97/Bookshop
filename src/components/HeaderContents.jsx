import Avatar from "@mui/material/Avatar";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
const HeaderContents = () => {
  return (
    <>
      <div className="flex justify-between px-6 py-6">
        <div className="px-7 py-1">
          <FavoriteBorderIcon />
        </div>
        <Avatar
          sx={{ background: "#191970" }}
          alt="Remy Sharp"
          src="/broken-image.jpg"
        >
          O
        </Avatar>
        <div className="font-bold text-slate-400 text-xl mb-2 px-6 py-1">
          EN
        </div>
      </div>
    </>
  );
};
export default HeaderContents;
