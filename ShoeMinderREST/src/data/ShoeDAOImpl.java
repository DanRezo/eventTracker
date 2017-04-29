package data;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.transaction.annotation.Transactional;

import com.fasterxml.jackson.databind.ObjectMapper;

import entities.Shoe;

@Transactional
public class ShoeDAOImpl implements ShoeDAO {

	@PersistenceContext
	private EntityManager em;

	@Override
	public List<Shoe> index() {
		String query = "SELECT s FROM Shoe s";
		return em.createQuery(query, Shoe.class).getResultList();
	}

	@Override
	public Shoe show(int id) {
		return em.find(Shoe.class, id);

	}

	@Override
	public Shoe create(String todoJson) {
		try {
			ObjectMapper mapper = new ObjectMapper();
			Shoe mappedShoe = mapper.readValue(todoJson, Shoe.class);
			em.persist(mappedShoe);
			em.flush();
			return mappedShoe;
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}

	@Override
	public Shoe update(int id,String todoJson) {
		try {
			ObjectMapper mapper = new ObjectMapper();
			Shoe mappedShoe = mapper.readValue(todoJson, Shoe.class);
			Shoe managedShoe = em.find(Shoe.class, id);
			managedShoe.setTotalMileage(mappedShoe.getTotalMileage());
			System.out.println(mappedShoe);
			return mappedShoe;
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}
	//
	// Shoe shoe = em.find(Shoe.class, id);
	// shoe.setTotalMileage(s.getTotalMileage());
	//
	// return shoe;
	// }

	@Override
	public Boolean destroy(int id) {

		Shoe shoe = em.find(Shoe.class, id);
		em.remove(shoe);

		if (em.find(Shoe.class, id) == null) {
			return true;
		} else {
			return false;
		}

	}

}
