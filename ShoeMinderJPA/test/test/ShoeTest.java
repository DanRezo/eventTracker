package test;

import static org.junit.Assert.assertEquals;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;

import entities.Shoe;

public class ShoeTest {

	public EntityManagerFactory emf = null;
	public EntityManager em = null;
	private Shoe s;

	@Before
	public void setUp() throws Exception {
		emf = Persistence.createEntityManagerFactory("Shoe");
		em = emf.createEntityManager();
		s = em.find(Shoe.class, 2);
	}

	@After
	public void teardown() throws Exception {
		em.close();
		emf.close();
	}

//	@Test
//	public void test() {
//		boolean pass = true;
//		assertEquals(pass, true);
//	}

	
	@Test
	public void testShoeBrand() {
		assertEquals(s.getBrand(), "Nike");
	}
	
	@Test
	public void testShoeName() {
		assertEquals(s.getName(), "Pegasus 34");
	}

	@Test
	public void testTotalMileage(){
		assertEquals(s.getTotalMileage(), 56);
	}
	
}
