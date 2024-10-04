// constant.js
export const dashboardData = {
    user: 'Saurav',
    currentTime: '2:30 PM',
    leaveRequests: 3,
    attendance: {
      today: {
        status: 'present',
        timeLeft: '3h 45m',
        days: 50
      },
      averageHours: '8h 30m',
      averageCheckIn: '9:05 AM',
      averageCheckOut: '5:45 PM',
      onTimeArrivalPercentage: 80,
      details: {
        InOffice: 60,
        Halfday: 6,
        Workfromhome: 32,
        Onleave: 9,
      }
    },
  };
export const hours = {
  LastWeek : {
    Atul  :  21,
    Nitin : 17  ,
    Ani: 27 ,
    Golu: 39 ,
    Kaku: 15 ,
    Raju : 29 ,
    Hira  : 18

  },
  ThisWeek : {
    Atul  :  26,
    Nitin : 44  ,
    Ani: 16 ,
    Golu: 5 ,
    Kaku: 17 ,
    Raju : 22 ,
    Hira  : 33 
  }
}
  export const team = [
    {
      "name": "Atul",
      "role": "Designer",
      "profileImage": "https://i.pinimg.com/originals/6d/5f/c6/6d5fc60bae3dc6139eefa31af206596f.jpg",
      status: {
        Mon: 'available',
        Tue: 'available',
        Wed: 'unavailable',
        Thu: 'available',
        Fri: 'yellow',
        Sat: 'available',
        Sun: 'available'
    }
  
    },
    {
      "name": "Nitin",
      "role": "Designer",
      "profileImage": "https://cdn.openart.ai/published/S7jOXsdB3tMDFy6JNfak/-nmXB1M1_vvaY_1024.webp",
      status: {
        Mon: 'unavailable',
        Tue: 'available',
        Wed: 'yellow',
        Thu: 'available',
        Fri: 'available',
        Sat: 'unavailable',
        Sun: 'available'
    }
    
    },
    {
      "name": "Ani",
      "role": "Engineer",
      "profileImage": "https://i.pinimg.com/474x/8c/44/07/8c44070959b012caa775ee4929c15ffe.jpg",
      status: {
        Mon: 'available',
        Tue: 'yellow',
        Wed: 'unavailable',
        Thu: 'available',
        Fri: 'available',
        Sat: 'off',
        Sun: 'off'
    }
      
    },
    {
      "name": "Golu",
      "role": "Manager",
      "profileImage": "https://png.pngtree.com/thumb_back/fh260/background/20230527/pngtree-cartoon-of-a-young-woman-smiling-on-a-black-background-image_2680954.jpg",
      
    },
    {
      "name": "Kaku",
      "role": "Marketing",
      "profileImage": "https://png.pngtree.com/thumb_back/fh260/background/20230527/pngtree-in-the-style-of-dark-turquoise-and-light-navy-image_2698692.jpg",
      status: {
        Mon: 'unavailable',
        Tue: 'unavailable',
        Wed: 'available',
        Thu: 'yellow',
        Fri: 'available',
        Sat: 'unavailable',
        Sun: 'yellow'
    }
    },
    {
      "name": "Raju",
      "role": "Analyst",
      "profileImage": "https://png.pngtree.com/thumb_back/fh260/background/20230527/pngtree-an-animated-illustration-that-features-a-young-man-playing-a-game-image_2680953.jpg",
      status: {
        Mon: 'available',
        Tue: 'available',
        Wed: 'available',
        Thu: 'unavailable',
        Fri: 'yellow',
        Sat: 'available',
        Sun: 'unavailable'
    }
    },
    {
      "name": "Hira",
      "role": "HR",
      "profileImage": "https://img.freepik.com/premium-vector/young-man-face-avater-vector-illustration-design_968209-13.jpg",
      status: {
        Mon: 'yellow',
        Tue: 'available',
        Wed: 'available',
        Thu: 'unavailable',
        Fri: 'available',
        Sat: 'off',
        Sun: 'available'
    }
    }
  ];
  export const team1 = [
    {
        name: 'Shreya',
        role: 'UI Designer',
        profilePicture: 'https://storage.googleapis.com/a1aa/image/ssItUqqvrV5ffEelR9eLu0RrYFGjTEpeLepyLqKKfvwRepfFnA.jpg',
        status: [, 'blue', 'blue', 'blue', 'blue', 'gray','yellow', 'gray', 'blue', 'blue', 'blue', 'blue', 'gray','yellow', 'gray', 'blue', 'blue', 'blue', 'blue', 'gray'], // Status for Mon-Sun
    },
    {
        name: 'Nitin',
        role: 'UX Designer',
        profilePicture: 'https://storage.googleapis.com/a1aa/image/UHtk2mRpjHZWGJGIuEuUzb16aJKUIDXdVQjFMcggBtpf0fiTA.jpg',
        status: ['red', 'gray', 'blue', 'blue', 'blue', 'blue', 'gray','gray', 'yellow', 'blue', 'blue', 'gray', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'gray'], // Status for Mon-Sun
    },
    {
        name: 'Rahul',
        role: 'Frontend Developer',
        profilePicture: 'https://storage.googleapis.com/a1aa/image/UHtk2mRpjHZWGJGIuEuUzb16aJKUIDXdVQjFMcggBtpf0fiTA.jpg',
        status: ['blue', 'blue', 'gray', 'blue', 'blue', 'yellow', 'gray','red', 'gray', 'blue', 'blue', , 'blue', 'blue', 'blue', 'blue', 'gray','blue', 'blue', 'gray'], // Status for Mon-Sun
    },
    {
        name: 'Priya',
        role: 'Backend',
        profilePicture: 'https://storage.googleapis.com/a1aa/image/ssItUqqvrV5ffEelR9eLu0RrYFGjTEpeLepyLqKKfvwRepfFnA.jpg',
        status: ['gray', 'yellow', , 'blue', 'blue', 'blue', 'blue', 'gray','blue', 'blue', 'gray', 'blue', 'blue','red', 'gray', 'blue', 'blue', 'blue', 'blue', 'gray'], // Status for Mon-Sun
    }
];


  
  



