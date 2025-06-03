const appointments = [
    {
      id: 1,
      date: '2023-10-01',
      time: '09:30',
      status: 'active',
      user: {
        id: 1,
        name: 'John Smith',
        email: 'john.smith@example.com',
        birthdate: '1985-08-20',
        nDNI: '12345678A',
      },
    },
    {
      id: 2,
      date: '2023-10-02',
      time: '10:00',
      status: 'cancelled',
      user: {
        id: 2,
        name: 'Jane Doe',
        email: 'bob@gmail.com',
        birthdate: '1990-05-15',
        nDNI: '23456789B',
      },
    },
    {
      id: 3,
      date: '2023-10-03',
      time: '11:15',
      status: 'active',
      user: {
        id: 3,
        name: 'Carlos Pérez',
        email: 'carlos.perez@gmail.com',
        birthdate: '1992-12-10',
        nDNI: '34567890C',
      },
    },
    {
      id: 4,
      date: '2023-10-04',
      time: '14:00',
      status: 'cancelled',
      user: {
        id: 4,
        name: 'Lucía Fernández',
        email: 'lucia.fer@example.com',
        birthdate: '1988-03-05',
        nDNI: '45678901D',
      },
    },
    {
      id: 5,
      date: '2023-10-05',
      time: '16:30',
      status: 'active',
      user: {
        id: 5,
        name: 'Matías Gómez',
        email: 'matias.gomez@example.com',
        birthdate: '1995-07-22',
        nDNI: '56789012E',
      },
    },
  ];

export default appointments;