using CityBootStrap.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace CityBootStrap
{
    public class CityController : Controller
    {
        //
        // GET: /City/
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult GetCities(string sortingOrder)
        {
            var cities = Repository.GetCities().OrderBy(c => c.Name).ToList();

            return Json(cities, JsonRequestBehavior.AllowGet);
        }

        public ActionResult GetAllCityInformation()
        {
            var cityinfo = Repository.GetCityInformations();

            return Json(cityinfo, JsonRequestBehavior.AllowGet);
        }

        public ActionResult GetCityInformation(int cityID)
        {
            var cityinfo = Repository.GetCityInformations().Where(c => c.ID == cityID).ToList();

            if(cityID == 0)
                cityinfo = Repository.GetCityInformations();

            return Json(cityinfo, JsonRequestBehavior.AllowGet);
        }
	}
}