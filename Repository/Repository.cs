using CityBootStrap.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CityBootStrap
{
    public class Repository
    {
        public static List<City> GetCities()
        {
            List<City> cities = new List<City>();

            cities = new List<City>()
            {
                new City
                {
                    ID=1, 
                    Name="Dhaka"
                },
                new City
                {
                    ID=3,
                    Name="Sydney"
                },
                new City
                {
                    ID=2,
                    Name="Paris"
                }
            };

            return cities;
        }

        public static List<CityInformation> GetCityInformations()
        {
            List<CityInformation> cityinfos = new List<CityInformation>();

            cityinfos = new List<CityInformation>()
            {
                new CityInformation
                {
                    ID=1, 
                    Area = 5000,
                    Description = "Dhaka is the best city in the world"
                },
                new CityInformation
                {
                    ID=1, 
                    Area = 5000,
                    Description = "Dhaka is the best city in the world"
                },
                new CityInformation
                {
                    ID=3, 
                    Area = 10000,
                    Description = "Sydney is a beutiful city."
                },
                new CityInformation
                {
                    ID=2, 
                    Area = 15000,
                    Description = "Paris is a lovely city."
                }
            };

            return cityinfos;
        }
    }
}