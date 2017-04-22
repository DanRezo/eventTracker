package data;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.transaction.annotation.Transactional;

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
	public Shoe create(Shoe s) {
		em.persist(s);
		em.flush();

		return s;
	}

	@Override
	public Shoe update(int id, Shoe s) {
		Shoe shoe = em.find(Shoe.class, id);

		shoe.setName(s.getName());
		shoe.setBrand(s.getBrand());
		shoe.setCurrentMilage(s.getCurrentMilage());
		shoe.setTotalMilage(s.getTotalMileage());
		shoe.setImage(s.getImage());

		return shoe;
	}

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
