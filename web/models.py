from django.db import models
from django.contrib.auth.models import User

# User Roles
class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    role = models.CharField(max_length=20, choices=[('Admin', 'Admin'), ('Pharmacist', 'Pharmacist'), ('Buyer', 'Buyer')])
    contact_number = models.CharField(max_length=15)
    address = models.TextField()

# Supplier Management
class Supplier(models.Model):
    name = models.CharField(max_length=255)
    contact_person = models.CharField(max_length=255)
    phone_number = models.CharField(max_length=15)
    email = models.EmailField()
    address = models.TextField()

# Product Catalog
class Product(models.Model):
    name = models.CharField(max_length=255)
    category = models.CharField(max_length=100)
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    stock_quantity = models.IntegerField()
    batch_number = models.CharField(max_length=50, unique=True)
    expiry_date = models.DateField()
    supplier = models.ForeignKey(Supplier, on_delete=models.CASCADE)

# Orders
class Order(models.Model):
    buyer = models.ForeignKey(User, on_delete=models.CASCADE)
    order_date = models.DateTimeField(auto_now_add=True)
    status = models.CharField(max_length=50, choices=[('Pending', 'Pending'), ('Processing', 'Processing'), ('Shipped', 'Shipped'), ('Delivered', 'Delivered')])
    total_price = models.DecimalField(max_digits=10, decimal_places=2)

# Order Items
class OrderItem(models.Model):
    order = models.ForeignKey(Order, on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.IntegerField()
    subtotal = models.DecimalField(max_digits=10, decimal_places=2)

# Payments
class Payment(models.Model):
    order = models.OneToOneField(Order, on_delete=models.CASCADE)
    payment_method = models.CharField(max_length=50, choices=[('Credit Card', 'Credit Card'), ('Mobile Money', 'Mobile Money'), ('Bank Transfer', 'Bank Transfer')])
    payment_status = models.CharField(max_length=50, choices=[('Pending', 'Pending'), ('Completed', 'Completed'), ('Failed', 'Failed')])
    transaction_date = models.DateTimeField(auto_now_add=True)

# Delivery Tracking
class Delivery(models.Model):
    order = models.OneToOneField(Order, on_delete=models.CASCADE)
    tracking_number = models.CharField(max_length=100, unique=True)
    delivery_status = models.CharField(max_length=50, choices=[('Dispatched', 'Dispatched'), ('In Transit', 'In Transit'), ('Delivered', 'Delivered')])
    estimated_arrival = models.DateTimeField()
