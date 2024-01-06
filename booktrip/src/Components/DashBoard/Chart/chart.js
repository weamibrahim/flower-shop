import Chart from 'chart.js/auto';
import React, { useEffect} from 'react';
function ChartData (){

    useEffect(() => {
        // Fetch data for flowers
        fetch("https://flowershop-bw6z.onrender.com/api/flower/flowers")
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
            
                createFlowerChart(data);
            });

        // Fetch data for users
        fetch("https://flowershop-bw6z.onrender.com/api/users/alluser")  // Replace with your user API endpoint
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
              
                createUserChart(data);
            });
    }, []); 

    const createFlowerChart = (flowersData) => {
        const flowerNames = flowersData.map((flower) => flower.name);
        const flowerPrices = flowersData.map((flower) => flower.price);

        let ctx = document.getElementById('flowerChart').getContext('2d');
        
        if (window.myFlowerChart) {
            window.myFlowerChart.destroy();
        }

        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: flowerNames,
                datasets: [
                    {
                        label: 'Flower Prices',
                        data: flowerPrices,
                        backgroundColor: ['rgb(255, 99, 132,0.8)'],
                        borderColor:  ['rgb(255, 99, 132,0.8)'],
                        borderWidth: 1,
                    },
                ],
            },
        });
    };

    const createUserChart = (usersData) => {
        const roleCounts = {
            admin: 0,
            user: 0,
        };
    
        usersData.forEach((user) => {
            const role = user.role.toLowerCase(); // Convert to lowercase for case-insensitive comparison
            if (roleCounts.hasOwnProperty(role)) {
                roleCounts[role]++;
            }
        });
    
        const roles = Object.keys(roleCounts);
        const counts = Object.values(roleCounts);
    
        console.log('Roles:', roles);
        console.log('Counts:', counts);
    
        let ctx = document.getElementById('userChart').getContext('2d');
    
        if (window.myUserChart) {
            window.myUserChart.destroy();
        }
    
        new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: roles,
                datasets: [
                    {
                        label: 'Role Count',
                        data: counts,
                        backgroundColor: ['rgba(255, 99, 132, 0.8)', 'rgba(54, 162, 235, 0.8)'],
                        borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)'],
                        borderWidth: 1,
                    },
                ],
            },
        });
    };
    
    
    return (
        <div className='d-flex justify-content-around'>
        <div className='w-25 h-25 '>
           
            <canvas id="flowerChart" width="400" height="500"></canvas>

        </div>
        <div className='w-25 h-25  '>
           
           <canvas id="userChart" width="400" height="500"></canvas>

       </div>
        </div>
    );
};
export default ChartData 
