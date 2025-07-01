alert("Selamat dikalkulator saldo sederhana saya");

let saldoAwal = Number(prompt("masukkan saldo awal anda"));//Number() merubah string menjadi number(secara default nilai dari prompt string)
let quest = confirm("apakah anda ingin menabung?");
let saldoTambahan;
let hutang;
let saldoAkhir;

if(quest){
    saldoTambahan = Number(prompt("masukkan saldo yang akan anda tambahkan"));
    hutang = Number(prompt("masukkan hutang(jika ada hutang)"));
    saldoAkhir = saldoAwal + saldoTambahan - hutang;
}else{
    hutang = Number(prompt("masukkan hutang(jika ada hutang)"));
    saldoAkhir = saldoAwal - hutang;
}



alert(`jadi saldo yang anda miliki sekarang adalah ${saldoAkhir}`);
// console.log(saldoAkhir);