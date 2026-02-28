import { useNavigate } from "react-router-dom";
import Button from "../../design-system/Button";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-blue-600 mb-4">404</h1>
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          Az oldal nem található
        </h2>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          Sajnáljuk, de a keresett oldal nem létezik vagy el lett távolítva.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            text="Vissza a kezdőlapra"
            onClick={() => navigate("/")}
            colorClass="bg-blue-500 hover:bg-blue-600"
            noMargin
          />
          <Button
            text="Vissza"
            onClick={() => navigate(-1)}
            colorClass="bg-gray-500 hover:bg-gray-600"
            noMargin
          />
        </div>
      </div>
    </div>
  );
};

export default NotFound;
