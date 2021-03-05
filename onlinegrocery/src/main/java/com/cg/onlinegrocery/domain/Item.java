package com.cg.onlinegrocery.domain;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;

/**
 * This class is a pojo for item
 * 
 * @author Rishita
 *
 */

@Entity
public class Item {
	@Column(name = "item_id")
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int itemId;

	@NotBlank(message = "Item Name Required")
	private String itemName;

	// @NotBlank(message = "Item Price Required")
	private double itemPrice;

	@NotNull(message = "Item Quantity Required")
	private int itemQuantity;

	@ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.REFRESH)
	@JoinColumn(name = "order_id", updatable = false, nullable = false)
	@JsonIgnore
	private Order order;

	public Item() {
		super();
	}

	// getters and setters

	public int getItemId() {
		return itemId;
	}

	public void setItemId(int itemId) {
		this.itemId = itemId;
	}

	public String getItemName() {
		return itemName;
	}

	public void setItemName(String itemName) {
		this.itemName = itemName;
	}

	public double getItemPrice() {
		return itemPrice;
	}

	public void setItemPrice(double itemPrice) {
		this.itemPrice = itemPrice;
		// this.itemPrice = itemPrice* itemQuantity;
	}

	public int getItemQuantity() {
		return itemQuantity;
	}

	public void setItemQuantity(int itemQuantity) {
		this.itemQuantity = itemQuantity;
	}

	@JsonBackReference
	public Order getOrder() {
		return order;
	}

	public void setOrder(Order order) {
		this.order = order;
	}

}