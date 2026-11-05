<?php
    echo "<h1>Data Kontak</h1>";
    echo '<form method="POST" action="">
    <p>Nama                : <br /><input type="text" name="nama" /></p>
    <p>Telepon             : <br /><input type="text" name="telepon" /></p>
    <p>Email               : <br /><input type="text" name="email" /><p>
    <button type="sumbit">kirim</button>
    </form>' ;

    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        $nama = $_POST['nama'];
        $telepon = $_POST['telepon'];
        $email = $_POST['email'];
        echo "terima kasih, " . htmlspecialchars($nama) . "! informasi selanjutnya akan dikirim ke nomor telepon " .
        htmlspecialchars($telepon) . " dan email " . htmlspecialchars($email);
    }else{
        echo "silahkan isi formulir di atas untuk mengirimkan data kontrak.";
    }
    ?>