import Loading from "../components/Loading";

// Показується автоматично, поки завантажується сторінка спеціальностей.
export default function SpecialtiesLoading() {
  return <Loading text="Завантаження інформації про спеціальності..." />;
}
