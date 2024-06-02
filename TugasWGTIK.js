function kenaRazia(date, data) {
    const isDateOdd = date % 2 !== 0;
    
    const restrictedRoutes = [
      "Gajah Mada",
      "Hayam Wuruk",
      "Sisingamangaraja",
      "Panglima Polim",
      "Fatmawati",
      "Tomang Raya"
    ];
  
    const result = [];
        
    for (let i = 0; i < data.length; i++) {
      const vehicle = data[i];

      if (vehicle.type === "Mobil") {
        const platNumbers = vehicle.plat.match(/\d+/g).join("");
        const lastDigit = parseInt(platNumbers[platNumbers.length - 1]);
        const isPlatOdd = lastDigit % 2 !== 0;
        
        let violationCount = 0;
        for (let j = 0; j < vehicle.rute.length; j++) {
          if (restrictedRoutes.includes(vehicle.rute[j])) {
            if ((isDateOdd && !isPlatOdd) || (!isDateOdd && isPlatOdd)) {
              violationCount++;
            }
          }
        }
        
        if (violationCount > 0) {
          result.push({
            name: vehicle.name,
            tilang: violationCount
          });
        }
      }
    }

    return result;
  }

console.log(
    kenaRazia(27, [
      {
        name: "Denver",
        plat: "B 2791 KDS",
        type: "Mobil",
        rute: ["TB Simatupang", "Panglima Polim", "Depok", "Senen Raya"]
      },
      {
        name: "Toni",
        plat: "B 1212 JBB",
        type: "Mobil",
        rute: [
          "Pintu Besar Selatan",
          "Panglima Polim",
          "Depok",
          "Senen Raya",
          "Kemang"
        ]
      },
      {
        name: "Stark",
        plat: "B 444 XSX",
        type: "Motor",
        rute: ["Pondok Indah", "Depok", "Senen Raya", "Kemang"]
      },
      {
        name: "Anna",
        plat: "B 678 DD",
        type: "Mobil",
        rute: [
          "Fatmawati",
          "Panglima Polim",
          "Depok",
          "Senen Raya",
          "Kemang",
          "Gajah Mada"
        ]
      }
    ])
  );
