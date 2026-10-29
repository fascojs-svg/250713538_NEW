function fn_ValForm(){
            var sMsg = "";
            var nama = document.getElementById("nama").value;
            var email =document.getElementById("email").value;
            var umur = document.getElementById("umur").value;
            var kategori = document.getElementById("ketegori").value;
            var validasi = ^[a-z0-9][a-z0-9_\.-]{0,}[a-z0-9]@[a-z0-9][a-z0-9_\.-]{0,}[a-z0-
                            9][\.][a-z0-9]{2,4}$;

            if (document.getElementById("nama").value == "") {
                sMsg += "\n*Anda belum mengisiskan nama";
            }
            if (document.getElementById("email").value == "") {
                sMsg += "\n*Anda belum mengisiskan email";
            }else if(!validasi.text (email)){
                sMsg += "\n*Format email salah";
            }
            if (document.getElementById("umur").value == "") {
                sMsg += "\n*Anda belum mengisiskan umur";
            }
            if (sMsg != "") {
                alert("peringatan:\n" + sMsg);
                return false;
            }else{
                return true;
            }

            if (iUmur <= 25) {
                
            } else {
                
            }

        }


    
