import Button from "./Button";
import { useNavigate } from "react-router-dom";

const Privacy = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1 className="text-2xl font-bold text-center mt-10 mb-5">
        Adatvédelmi és Biztonsági Tájékoztató
      </h1>
      <p className="mb-2">
        Fontos számunkra az adataid védelme és biztonsága. Így kezeljük az
        információidat:
      </p>
      <p className="mb-2">
        <b>Helyi Adattárolás:</b> A teszt adatai nagyrészt a saját eszközödön
        kerülnek tárolásra. Az adatok nem kerülnek elküldésre harmadik félhez,
        felhőszolgáltatásokhoz, adatbázisokba vagy más külső forrásokba. Az
        eszközödön tárolt információkat bármikor törölheted. Kérlek, használd
        ezt a linket az adatok törléséhez.
      </p>
      <p className="mb-2">
        <b>Anonim Válaszok:</b> A teszt válaszai teljesen anonimak, és nincsenek
        összekapcsolva a neveddel vagy bármilyen személyazonosító információval.
        Adatbázis Használat: Az egyetlen dolog, amit adatbázisba tárolunk, az
        az, amikor egy barátod kitölti a teszt azon részét, amit ő kell, hogy
        kitöltsön. Amikor már nincs szükség ennek az információnak a tárolására,
        töröljük az adatbázisból.
      </p>

      <div className="w-full mt-4 flex justify-center w-108">
        <Button
          text="Vissza a kezdőlapra"
          fullWidth
          onClick={() => {
            navigate("/");
          }}
        />
      </div>
    </>
  );
};

export default Privacy;
