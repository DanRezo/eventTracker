package controllers;

import java.io.IOException;
import java.util.List;

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

	@RequestMapping(value = "shoes", method = RequestMethod.GET)
	public List<Shoe> index() {
		return shoeDao.index();
	}
	
	@RequestMapping(value = "shoes/{id}", method = RequestMethod.GET)
	public Shoe show(@PathVariable int id) {
		return shoeDao.show(id);
	}
	
	@RequestMapping(value = "shoes", method = RequestMethod.POST)
	public Shoe create(@RequestBody String jsonShoe) {

		ObjectMapper mapper = new ObjectMapper();
		try {
			Shoe mappedShoe = mapper.readValue(jsonShoe, Shoe.class);

			return shoeDao.create(mappedShoe);

		} catch (Exception e) {
			e.printStackTrace();

			return null;

		}

	}
	
	@RequestMapping(value = "shoes/{id}", method = RequestMethod.PUT)
	public Shoe update(@PathVariable int id, @RequestBody String jsonShoe) {

		ObjectMapper mapper = new ObjectMapper();

		try {
			Shoe mappedShoe = mapper.readValue(jsonShoe, Shoe.class);
			return shoeDao.update(id, mappedShoe);
		} catch (IOException e) {
			e.printStackTrace();
			return null;
		}

	}
	
	@RequestMapping(value = "shoes/{id}", method = RequestMethod.DELETE)
	public Boolean destroy(@PathVariable int id) {
		return shoeDao.destroy(id);
	}
	
	
	
}
