from django.shortcuts import render

# Create your views here.

def index(request):
    return render(request, 'bilega/index.html')

def sidemenu(request):
    return render(request, 'bilega/sidemenu.html')

def dashboard(request):
    return render(request, 'bilega/dashboard.html')

def userman(request):
    return render(request, 'bilega/userman.html')

def inventory(request):
    return render(request, 'bilega/inventory.html')

def product(request):
    return render(request, 'bilega/products.html')

def sales(request):
    return render(request, 'bilega/sales.html')

def order(request):
    return render(request, 'bilega/order.html')

def bills(request):
    return render(request, 'bilega/bills.html')

def batch(request):
    return render(request, 'bilega/batch.html')

def analytics(request):
    return render(request, 'bilega/analytics.html')

def compliance(request):
    return render(request, 'bilega/compliance.html')

def branches(request):
    return render(request, 'bilega/branches.html')

def integration(request):
    return render(request, 'bilega/integration.html')

# sales section

def sales_overview(request):
    return render(request, 'bilega/subpages/sales/overview.html')
    
def invoice(request):
    return render(request, 'bilega/subpages/sales/invoice.html')

def discount(request):
    return render(request, 'bilega/subpages/sales/discount.html')

def available_orders(request):
    return render(request, 'bilega/subpages/sales/available_orders.html')

def pricing(request):
    return render(request, 'bilega/subpages/sales/pricing.html')

# user management section

def userman_overview(request):
    return render(request, 'bilega/subpages/user/overview.html')

def userman_admin(request):
    return render(request, 'bilega/subpages/user/admin.html')

def userman_customer(request):
    return render(request, 'bilega/subpages/user/cutomer.html')

def userman_pharmacist(request):
    return render(request, 'bilega/subpages/user/parmacist.html')

def userman_staff(request):
    return render(request, 'bilega/subpages/user/staff.html')

# inventory section

def inventory_overview(request):
    return render(request, 'bilega/subpages/inventory/overview.html')

def inventory_low_stock(request):
    return render(request, 'bilega/subpages/inventory/low_stock.html')

def inventory_stock(request):
    return render(request, 'bilega/subpages/inventory/stock.html')

def inventory_suppliers(request):
    return render(request, 'bilega/subpages/inventory/supliers.html')

# order section

def order_overview(request):
    return render(request, 'bilega/subpages/order/overview.html')

def order_tracking(request):
    return render(request, 'bilega/subpages/order/tracking.html')

def order_history(request):
    return render(request, 'bilega/subpages/order/history.html')

def order_return(request):
    return render(request, 'bilega/subpages/order/returns.html')

def order_refund(request):
    return render(request, 'bilega/subpages/order/refund.html')

# integration section

def integration_overview(request):
    return render(request, 'bilega/subpages/integration/overview.html')

def integration_accounting(request):
    return render(request, 'bilega/subpages/integration/accounting.html')

def integration_barcode(request):
    return render(request, 'bilega/subpages/integration/barcode.html')

def integration_prescription(request):
    return render(request, 'bilega/subpages/integration/prescription.html')

#compliance section

def compliance_overview(request):
    return render(request, 'bilega/subpages/compliance/overview.html')

def compliance_tra(request):
    return render(request, 'bilega/subpages/compliance/tra.html')

def compliance_tmda(request):
    return render(request, 'bilega/subpages/compliance/tmda.html')

def compliance_other(request):
    return render(request, 'bilega/subpages/compliance/other.html')

# branches section

def branches_overview(request):
    return render(request, 'bilega/subpages/branches/overview.html')

def branches_branches(request):
    return render(request, 'bilega/subpages/branches/branches.html')

def branches_expansion(request):
    return render(request, 'bilega/subpages/branches/expansion.html')

def branches_warehouse(request):
    return render(request, 'bilega/subpages/branches/warehouse.html')

# billing section

def billing_overview(request):
    return render(request, 'bilega/subpages/billing/overview.html')

def billing_options(request):
    return render(request, 'bilega/subpages/billing/options.html')

def billing_tracking(request):
    return render(request, 'bilega/subpages/billing/tracking.html')

def billing_tax(request):
    return render(request, 'bilega/subpages/billing/tax.html')

# batch section

def batch_overview(request):
    return render(request, 'bilega/subpages/batch/overview.html')

def batch_expiry(request):
    return render(request, 'bilega/subpages/batch/expiry.html')

def batch_near_expiry(request):
    return render(request, 'bilega/subpages/batch/near_expiry.html')

def batch_expired(request):
    return render(request, 'bilega/subpages/batch/expired.html')

# analytics section

def analytics_overview(request):
    return render(request, 'bilega/subpages/analytics/overview.html')

def analytics_customer(request):
    return render(request, 'bilega/subpages/analytics/customer.html')

def analytics_inventory(request):
    return render(request, 'bilega/subpages/analytics/inventory.html')

def analytics_sales(request):
    return render(request, 'bilega/subpages/analytics/sales.html')

