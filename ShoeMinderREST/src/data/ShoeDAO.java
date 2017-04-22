package data;

import java.util.List;

import org.springframework.web.bind.annotation.PathVariable;

import entities.Shoe;

public interface ShoeDAO {
	// index
	public List<Shoe> index();

	// show
	public Shoe show(@PathVariable int id);

	// create
	public Shoe create(Shoe s);

	// edit/update
	public Shoe update(int id, Shoe q);
	
	//delete
	public  Boolean destroy(int id);
}
