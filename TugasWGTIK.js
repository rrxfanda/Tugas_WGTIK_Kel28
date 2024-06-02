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
  
    const result = [
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
    ];

    return result;
  }
