package controllers;

import java.io.IOException;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.databind.ObjectMapper;

import data.ShoeDAO;
import entities.Shoe;

@RestController
public class ShoeController {

	@Autowired
	public ShoeDAO shoeDao;

	@RequestMapping(value = "ping", method = RequestMethod.GET)
	public String ping() {
		return "pong";
	}

	// index
	@RequestMapping(value = "shoes", method = RequestMethod.GET)
	public List<Shoe> index() {
		return shoeDao.index();
	}

	// show
	@RequestMapping(value = "shoes/{id}", method = RequestMethod.GET)
	public Shoe show(HttpServletRequest req, HttpServletResponse res,@PathVariable int id) {
		return shoeDao.show(id);
	}

	// create
	@RequestMapping(value = "shoes", method = RequestMethod.POST)
	public Shoe create(HttpServletRequest req, HttpServletResponse res, @RequestBody String shoeJson) {
			return shoeDao.create(shoeJson);
	}

	// update
	@RequestMapping(value = "shoes/{id}", method = RequestMethod.PUT)
	public Shoe update(HttpServletRequest req, HttpServletResponse res, @PathVariable int id, @RequestBody String shoeJson) {
			return shoeDao.update(id, shoeJson);
	}

	// delete
	@RequestMapping(value = "shoes/{id}", method = RequestMethod.DELETE)
	public Boolean destroy(HttpServletRequest req, HttpServletResponse res,@PathVariable int id) {
		return shoeDao.destroy(id);
	}
}
