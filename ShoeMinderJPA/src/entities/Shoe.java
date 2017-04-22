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
	private int currentMileage;
	private int totalMileage;
	private String brand;
	private String name;
	private String image;
	
	
	/// gets and sets
	
	public int getCurrentMilage() {
		return currentMileage;
	}
	public void setCurrentMilage(int currentMilage) {
		this.currentMileage = currentMilage;
	}
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
	public String getImage() {
		return image;
	}
	public void setImage(String image) {
		this.image = image;
	}
	public int getId() {
		return id;
	}
	
	/// toString()
	
	@Override
	public String toString() {
		return "Shoe [id=" + id + ", currentMilage=" + currentMileage + ", totalMilage=" + totalMileage + ", brand="
				+ brand + ", name=" + name + ", image=" + image + "]";
	}
 
	
	
	
	
}
