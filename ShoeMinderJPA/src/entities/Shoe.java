package entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Shoe {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private int totalMileage;
	private String brand;
	private String name;
	
	
	/// gets and sets
	

	public int getTotalMileage() {
		return totalMileage;
	}
	public void setTotalMilage(int totalMilage) {
		this.totalMileage = totalMilage;
	}
	public String getBrand() {
		return brand;
	}
	public void setBrand(String brand) {
		this.brand = brand;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}

	public int getId() {
		return id;
	}
	
	/// toString()
	
	@Override
	public String toString() {
		return "Shoe [id=" + id + ", currentMilage=" + ", totalMilage=" + totalMileage + ", brand="
				+ brand + ", name=" + name + ", image= ]";
	}
 
	
	
	
	
}
