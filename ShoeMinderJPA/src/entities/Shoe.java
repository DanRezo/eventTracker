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
	private double totalMileage;
	private String brand;
	private String name;
	
	
	/// gets and sets
	public double getTotalMileage() {
		return totalMileage;
	}
	public void setTotalMileage(double totalMileage) {
		this.totalMileage = totalMileage;
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
		return "Shoe [id=" + id + ", totalMileage=" + totalMileage + ", brand=" + brand + ", name=" + name + "]";
	}
	
	
	
	

	
	
	
	
	
	
	
	
}
