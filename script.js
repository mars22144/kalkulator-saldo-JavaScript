let saldoAwal
let saldoAkhir 
let saldoTambahan
let hutang
let quest

// Loop akan terus berjalan selama input tidak valid
while (true) {
  saldoAwal = prompt("Masukkan saldo awal anda:")
  
  if (saldoAwal === null) {
    alert("Operasi dibatalkan.")
    break; // Keluar dari loop jika user membatalkan
  }
  
  // Konversi input ke number untuk validasi
  const saldoNumber = Number(saldoAwal)
  
  if (isNaN(saldoNumber) || saldoAwal.trim() === "" || saldoNumber <= 0) {
    alert("Inputan tidak sesuai, masukkan angka yang benar.")
  }else{
    quest = confirm("apakah ingin menabung?")
    if(quest){
      saldoTambahan = Number(prompt("masukkan saldo yang akan anda tambahkan"))
      hutang = Number(prompt("masukkan hutang(jika ada hutang)"))
      saldoAkhir = saldoNumber + saldoTambahan - hutang
      break
    }else{
      hutang = Number(prompt("masukkan hutang"))
      saldoAkhir = saldoNumber - hutang
      break
    }
}
}
alert(`total saldo anda adalah ${saldoAkhir}`)