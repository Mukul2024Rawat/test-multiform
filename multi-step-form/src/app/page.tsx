import MultistepForm from '../components/MultistepForm';
import 'leaflet/dist/leaflet.css';

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <MultistepForm />
    </div>
  );
}
