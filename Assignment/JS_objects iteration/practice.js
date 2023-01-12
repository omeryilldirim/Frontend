const carData = [
    {
      id: 1,
      make: 'Toyota',
      model: 'Camry',
      year: 2020,
      color: 'Silver',
      mileage: 25000,
      engine: {
        type: "V6",
        horsepower: 300,
        cylinders: 6
      }
    },
    {
      id: 2,
      make: 'Honda',
      model: 'Accord',
      year: 2019,
      color: 'White',
      mileage: 20000,
      engine: {
        type: "V4",
        horsepower: 140,
        cylinders: 4
      }
    },
    {
      id: 3,
      make: 'Ford',
      model: 'Mustang',
      year: 2018,
      color: 'Red',
      mileage: 15000,
      engine: {
        type: "V8",
        horsepower: 400,
        cylinders: 8
      }
    },
    {
      id: 4,
      make: 'Chevrolet',
      model: 'Camaro',
      year: 2017,
      color: 'Black',
      mileage: 10000,
       engine: {
        type: "V4",
        horsepower: 200,
        cylinders: 4
      }
    },
    {
      id: 5,
      make: 'Dodge',
      model: 'Challenger',
      year: 2016,
      color: 'Blue',
      mileage: 5000,
       engine: {
        type: "V6",
        horsepower: 250,
        cylinders: 6
      }
    },
    {
      id: 6,
      make: 'BMW',
      model: '3 Series',
      year: 2015,
      color: 'Silver',
      mileage: 35000,
       engine: {
        type: "V8",
        horsepower: 400,
        cylinders: 8
      }
    },
    {
      id: 7,
      make: 'Audi',
      model: 'A4',
      year: 2014,
      color: 'Black',
      mileage: 30000,
       engine: {
        type: "V4",
        horsepower: 220,
        cylinders: 4
      }
    },
    {
      id: 8,
      make: 'Mercedes-Benz',
      model: 'C-Class',
      year: 2013,
      color: 'White',
      mileage: 25000,
       engine: {
        type: "V6",
        horsepower: 280,
        cylinders: 6
      }
    },
    {
      id: 9,
      make: 'Volkswagen',
      model: 'Golf',
      year: 2012,
      color: 'Red',
      mileage: 20000,
       engine: {
        type: "V4",
        horsepower: 180,
        cylinders: 4
      }
    },
    {
      id: 10,
      make: 'Tesla',
      model: 'Model S',
      year: 2011,
      color: 'Silver',
      mileage: 15000,
       engine: {
        type: "V4",
        horsepower: 260,
        cylinders: 4
      }
    },
  ]
  // 1- Rengi gümüş olan arabaları bir listeye ata.
  // 2- 2015 yılından sonra üretilmiş arabaları bir listeye ata.
  // 3- Arabaların ortalama kilometre değerini hesapla.
  // 4- 8 silindirli araçları listele
  // 5- Farklı uzunlukta olması muhtemel iki listeden İlki key'lerden, ikincisi ise Value'lardan oluşmaktadır. Yine key ve value'lardan oluşan bir obje döndüren bir fonksiyon yazınız. Yeterli value yoksa, kalan keylerin değeri null olmalıdır. Yeterli anahtar yoksa, değerlerin geri kalanını yok sayın.
  // keys = ['a', 'b', 'c', 'd']
  // values = [1, 2, 3]
  // createDict(keys, values) // returns {'a': 1, 'b': 2, 'c': 3, 'd': null}
  // 6- Bir obje içerisindeki key ve value'ları değiştirin. Yani key'ler value'lar olmalı ve value'lar key'ler olmalıdır.
  // Örnek: {a: 1, b: 2, c: 3}  -->  {1: 'a', 2: 'b', 3: 'c'}
  // Not: Eğer bir value birden fazla key'e sahipse, son key'i kullanın.
  