import Chart from "chart.js/auto";
import React, { useEffect } from "react";
function ChartData() {
  useEffect(() => {
    // Fetch data for flowers
    fetch("https://flower-shop-roan.vercel.app/api/flower/flowers")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        createFlowerChart(data);
      });

    // Fetch data for users
    fetch("https://flower-shop-roan.vercel.app/api/users/alluser", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }) // Replace with your user API endpoint
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        createUserChart(data);
      });
  }, []);

  const createFlowerChart = (flowersData) => {
    const flowerNames = flowersData.map((flower) => flower.name);
    const flowerPrices = flowersData.map((flower) => flower.price);

    let ctx = document.getElementById("flowerChart").getContext("2d");

    if (window.myFlowerChart) {
      window.myFlowerChart.destroy();
    }

    new Chart(ctx, {
      type: "bar",
      data: {
        labels: flowerNames,
        datasets: [
          {
            label: "Flower Prices",
            data: flowerPrices,
            backgroundColor: ["rgb(255, 99, 132,0.8)"],
            borderColor: ["rgb(255, 99, 132,0.8)"],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,

            ticks: {
              color: "black", // Text color
              font: {
                weight: "bold", // Font weight
              },
            },
          },
          x: {
            beginAtZero: true,
            ticks: {
              color: "black", // Text color
              font: {
                weight: "bold", // Font weight
              },
            },
          },
        },
      },
    });
  };

  const createUserChart = (usersData) => {
    // Transform data to get counts for each month
    const userCounts = usersData.reduce((acc, user) => {
      const month = new Date(user.createdAt).getMonth(); // Extract month from createdAt
      acc[month] = (acc[month] || 0) + 1;
      return acc;
    }, []);

    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    let ctx = document.getElementById("userChart").getContext("2d");

    if (window.myUserChart) {
      window.myUserChart.destroy();
    }

    new Chart(ctx, {
      type: "bar",
      data: {
        labels: months,
        datasets: [
          {
            label: "User Count",
            data: userCounts,

            backgroundColor: "rgba(0, 0, 255, 0.7)",
            borderColor: "rgba(0, 0, 255, 0.6)",
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,

            ticks: {
              color: "black", // Text color
              font: {
                weight: "bold", // Font weight
              },
            },
          },
          x: {
            beginAtZero: true,
            ticks: {
              color: "black", // Text color
              font: {
                weight: "bold", // Font weight
              },
            },
          },
        },
      },
    });
  };

  return (
    <div className="d-flex justify-content-around">
      <div className="w-25 h-25 ">
        <canvas id="flowerChart" width="400" height="500"></canvas>
      </div>
      <div className="w-25 h-25  ">
        <canvas id="userChart" width="400" height="500"></canvas>
      </div>
    </div>
  );
}
export default ChartData;
