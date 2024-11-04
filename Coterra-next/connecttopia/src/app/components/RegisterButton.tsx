import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

const RegisterButton: React.FC = () => {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // Menambahkan animasi keluar
    e.currentTarget.classList.add('exit');

    setTimeout(() => {
      router.push('/register'); // Ganti dengan path halaman register
    }, 300); // Durasi yang sama dengan animasi
  };

  return (
    <motion.button
      initial={{ opacity: 1, x: 0 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleClick}
      className="p-3 rounded-lg border border-gray-300 bg-white shadow-sm"
    >
      Register
    </motion.button>
  );
};

export default RegisterButton;
