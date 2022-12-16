class Reservation {
    constructor(guests,room, days) {
        this.guests = guests;
        this.room = room;
        this.days = days;

        this.total = days * Reservation.baseFee;
    }

    static baseFee = 100;

    static showBaseFee() {
        console.log(`Base fee: ${Reservation.baseFee}`);
    }

    static get premiumFee() {
        return Reservation.baseFee * 2;
    }


}





const r1 = new Reservation(3, "201", 5);

console.log(r1);

const r2 = new Reservation(2, "202", 3);

console.log(r2);

const r3 = new Reservation(1, "203", 2 );

console.log(Reservation.premiumFee * r3.days);







