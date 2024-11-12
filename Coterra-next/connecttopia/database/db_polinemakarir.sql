-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 12, 2024 at 07:23 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_polinemakarir`
--

-- --------------------------------------------------------

--
-- Table structure for table `artikel`
--

CREATE TABLE `artikel` (
  `idArtikel` varchar(16) NOT NULL,
  `judul` varchar(100) NOT NULL,
  `sub_judul` varchar(100) DEFAULT NULL,
  `konten` longtext NOT NULL,
  `cover` mediumblob NOT NULL,
  `User_username` varchar(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `keahlian`
--

CREATE TABLE `keahlian` (
  `Loker_idLoker` varchar(32) NOT NULL,
  `nama_keahlian` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `loker`
--

CREATE TABLE `loker` (
  `idLoker` varchar(32) NOT NULL,
  `judul` varchar(255) NOT NULL,
  `deskripsi` text NOT NULL,
  `tipe_loker` enum('Magang','Full Time') NOT NULL,
  `lokasi` varchar(255) NOT NULL,
  `gaji` varchar(255) DEFAULT NULL,
  `Username_perusahaan` varchar(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `melamar`
--

CREATE TABLE `melamar` (
  `User_pelamar` varchar(32) NOT NULL,
  `Loker_idLoker` varchar(32) NOT NULL,
  `waktu` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `pengalaman`
--

CREATE TABLE `pengalaman` (
  `pengalaman` varchar(255) NOT NULL,
  `Profile_User_username` varchar(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `perusahaan`
--

CREATE TABLE `perusahaan` (
  `idPerusahaan` varchar(32) NOT NULL,
  `nama` varchar(255) NOT NULL,
  `deskripsi` text NOT NULL,
  `alamat` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `website` varchar(255) DEFAULT NULL,
  `logo` mediumblob NOT NULL,
  `User_username` varchar(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `profile`
--

CREATE TABLE `profile` (
  `User_username` varchar(32) NOT NULL,
  `foto` mediumblob DEFAULT NULL,
  `alamat` varchar(255) DEFAULT NULL,
  `tanggal_lahir` date DEFAULT NULL,
  `gender` enum('P','L') DEFAULT NULL,
  `tanggal_daftar` datetime DEFAULT NULL,
  `telepon` varchar(15) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `profile`
--

INSERT INTO `profile` (`User_username`, `foto`, `alamat`, `tanggal_lahir`, `gender`, `tanggal_daftar`, `telepon`, `email`) VALUES
('a', NULL, NULL, NULL, NULL, NULL, '123', 'a@g.com'),
('baba123', NULL, NULL, NULL, NULL, NULL, '123', 'baba@gmail.com'),
('cc123', NULL, NULL, NULL, NULL, '0000-00-00 00:00:00', '123', 'cc@gmail.com'),
('dd123', NULL, NULL, NULL, NULL, '2024-11-11 21:36:26', '123', 'dd@gmail.com');

-- --------------------------------------------------------

--
-- Table structure for table `role`
--

CREATE TABLE `role` (
  `idRole` int(11) NOT NULL,
  `role` varchar(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `role`
--

INSERT INTO `role` (`idRole`, `role`) VALUES
(1, 'admin'),
(2, 'pelamar'),
(3, 'perusahaan');

-- --------------------------------------------------------

--
-- Table structure for table `sertifikat`
--

CREATE TABLE `sertifikat` (
  `nama_sertifikat` int(11) NOT NULL,
  `file_sertifikat` mediumblob DEFAULT NULL,
  `Profile_User_username` varchar(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `studi`
--

CREATE TABLE `studi` (
  `studi` varchar(255) NOT NULL,
  `Profile_User_username` varchar(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `telepon`
--

CREATE TABLE `telepon` (
  `Perusahaan_idPerusahaan` varchar(32) NOT NULL,
  `telepon` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `username` varchar(32) NOT NULL,
  `nama` varchar(50) NOT NULL,
  `Role_idRole` int(4) NOT NULL,
  `password` varchar(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`username`, `nama`, `Role_idRole`, `password`) VALUES
('a', 'a', 2, '0cc175b9c0f1b6a831c399e269772661'),
('baba123', 'baba', 2, '21661093e56e24cd60b10092005c4ac7'),
('cc123', 'cc', 2, 'e0323a9039add2978bf5b49550572c7c'),
('dd123', 'dd', 2, '1aabac6d068eef6a7bad3fdf50a05cc8'),
('g', 'geo', 2, 'g'),
('gio', 'giovano', 2, '2bb55d712c4dcbda95497e811b696352');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `artikel`
--
ALTER TABLE `artikel`
  ADD PRIMARY KEY (`idArtikel`),
  ADD UNIQUE KEY `idArtikel_UNIQUE` (`idArtikel`),
  ADD KEY `fk_Artikel_User1_idx` (`User_username`);

--
-- Indexes for table `keahlian`
--
ALTER TABLE `keahlian`
  ADD KEY `fk_Keahlian_Loker1_idx` (`Loker_idLoker`);

--
-- Indexes for table `loker`
--
ALTER TABLE `loker`
  ADD PRIMARY KEY (`idLoker`),
  ADD UNIQUE KEY `idLoker_UNIQUE` (`idLoker`),
  ADD KEY `fk_Loker_User1_idx` (`Username_perusahaan`);

--
-- Indexes for table `melamar`
--
ALTER TABLE `melamar`
  ADD KEY `fk_User_has_Loker_Loker1_idx` (`Loker_idLoker`),
  ADD KEY `fk_User_has_Loker_User1_idx` (`User_pelamar`);

--
-- Indexes for table `pengalaman`
--
ALTER TABLE `pengalaman`
  ADD KEY `fk_Pengalaman_Profile1_idx` (`Profile_User_username`);

--
-- Indexes for table `perusahaan`
--
ALTER TABLE `perusahaan`
  ADD PRIMARY KEY (`idPerusahaan`),
  ADD UNIQUE KEY `idPerusahaan_UNIQUE` (`idPerusahaan`),
  ADD KEY `fk_Perusahaan_User1_idx` (`User_username`);

--
-- Indexes for table `profile`
--
ALTER TABLE `profile`
  ADD PRIMARY KEY (`User_username`),
  ADD UNIQUE KEY `User_username_UNIQUE` (`User_username`),
  ADD KEY `fk_Profile_User1_idx` (`User_username`);

--
-- Indexes for table `role`
--
ALTER TABLE `role`
  ADD PRIMARY KEY (`idRole`),
  ADD UNIQUE KEY `idRole_UNIQUE` (`idRole`);

--
-- Indexes for table `sertifikat`
--
ALTER TABLE `sertifikat`
  ADD KEY `fk_Sertifikat_Profile1_idx` (`Profile_User_username`);

--
-- Indexes for table `studi`
--
ALTER TABLE `studi`
  ADD KEY `fk_Studi_Profile1_idx` (`Profile_User_username`);

--
-- Indexes for table `telepon`
--
ALTER TABLE `telepon`
  ADD KEY `fk_Telepon_Perusahaan1_idx` (`Perusahaan_idPerusahaan`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`username`),
  ADD UNIQUE KEY `username_UNIQUE` (`username`),
  ADD KEY `fk_User_Role_idx` (`Role_idRole`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `artikel`
--
ALTER TABLE `artikel`
  ADD CONSTRAINT `fk_Artikel_User1` FOREIGN KEY (`User_username`) REFERENCES `user` (`username`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `keahlian`
--
ALTER TABLE `keahlian`
  ADD CONSTRAINT `fk_Keahlian_Loker1` FOREIGN KEY (`Loker_idLoker`) REFERENCES `loker` (`idLoker`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `loker`
--
ALTER TABLE `loker`
  ADD CONSTRAINT `fk_Loker_User1` FOREIGN KEY (`Username_perusahaan`) REFERENCES `user` (`username`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `melamar`
--
ALTER TABLE `melamar`
  ADD CONSTRAINT `fk_User_has_Loker_Loker1` FOREIGN KEY (`Loker_idLoker`) REFERENCES `loker` (`idLoker`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_User_has_Loker_User1` FOREIGN KEY (`User_pelamar`) REFERENCES `user` (`username`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `pengalaman`
--
ALTER TABLE `pengalaman`
  ADD CONSTRAINT `fk_Pengalaman_Profile1` FOREIGN KEY (`Profile_User_username`) REFERENCES `profile` (`User_username`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `perusahaan`
--
ALTER TABLE `perusahaan`
  ADD CONSTRAINT `fk_Perusahaan_User1` FOREIGN KEY (`User_username`) REFERENCES `user` (`username`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `profile`
--
ALTER TABLE `profile`
  ADD CONSTRAINT `fk_Profile_User1` FOREIGN KEY (`User_username`) REFERENCES `user` (`username`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `sertifikat`
--
ALTER TABLE `sertifikat`
  ADD CONSTRAINT `fk_Sertifikat_Profile1` FOREIGN KEY (`Profile_User_username`) REFERENCES `profile` (`User_username`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `studi`
--
ALTER TABLE `studi`
  ADD CONSTRAINT `fk_Studi_Profile1` FOREIGN KEY (`Profile_User_username`) REFERENCES `profile` (`User_username`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `telepon`
--
ALTER TABLE `telepon`
  ADD CONSTRAINT `fk_Telepon_Perusahaan1` FOREIGN KEY (`Perusahaan_idPerusahaan`) REFERENCES `perusahaan` (`idPerusahaan`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `user`
--
ALTER TABLE `user`
  ADD CONSTRAINT `fk_User_Role` FOREIGN KEY (`Role_idRole`) REFERENCES `role` (`idRole`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
