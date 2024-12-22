from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name="index"),
    path('sidemenu/', views.sidemenu, name='sidemenu'),
    path('dashboard/', views.dashboard, name='dashboard'),
    path('userman/', views.userman, name='userman'),
    path('inventory/', views.inventory, name='inventory'),
    path('product/', views.product, name='product'),
    path('sales/', views.sales, name='sales'),
    path('order/', views.order, name='order'),
    path('bills/', views.bills, name='bills'),
    path('batch/', views.batch, name='batch'),
    path('analytics/', views.analytics, name='analytics'),
    path('compliance/', views.compliance, name='compliance'),
    path('branches/', views.branches, name='branches'),
    path('integration/', views.integration, name='integration'),

    # sales urls
    path('sales/overview/', views.sales_overview, name='sales_overview'),
    path('sales/orders/', views.available_orders, name='avalable_orders'),
    path('sales/discount/', views.discount, name='discount'),
    path('sales/invoice/', views.invoice, name='invoice'),
    path('sales/pricing/', views.pricing, name='pricing'),

    # analytics urls
    path('analytics/overview/', views.analytics_overview, name='analytics_overview'),
    path('analytics/customer/', views.analytics_customer, name='analytics_customer'),
    path('analytics/inventory/', views.analytics_inventory, name='analytics_inventory'),
    path('analytics/sales/', views.analytics_sales, name='analytics_inventory'),

    # batch urls

    path('batch/overview/', views.batch_overview, name='batch_overview'),
    path('batch/expired/', views.batch_expired, name='batch_expired'),
    path('batch/expiry/', views.batch_expiry, name='batch_expiry'),
    path('batch/near_expiry/', views.batch_near_expiry, name='batch_near_expiry'),

    # billing urls

    path('bills/overview/', views.billing_overview, name='bills_overview'),
    path('bills/options/', views.billing_options, name='bills_options'),
    path('bills/tracking/', views.billing_tracking, name='bills_tracking'),
    path('bills/tax/', views.billing_tax, name='bills_tax'),

    # branches section

    path('branches/overview/', views.branches_overview, name='branches_overview'),
    path('branches/branches/', views.branches_branches, name='branches_branches'),
    path('branches/warehouse/', views.branches_warehouse, name='branches_warehouse'),
    path('branches/expansion/', views.branches_expansion, name='branches_expansion'),

    # compliance section

    path('compliance/overview/', views.compliance_overview, name='compliance_overview'),
    path('compliance/tra/', views.compliance_tra, name='compliance_tra'),
    path('compliance/tmda/', views.compliance_tmda, name='compliance_tmda'),
    path('compliance/other/', views.compliance_other, name='compliance_other'),

    # integration section

    path('integration/overview/', views.integration_overview, name='integration_overview'),
    path('integration/accounting/', views.integration_accounting, name='integration_accounting'),
    path('integration/barcode/', views.integration_barcode, name='integration_barcode'),
    path('integration/prescription/', views.integration_prescription, name='integration_prescription'),

    # inventory section

    path('inventory/overview/', views.inventory_overview, name='inventory_overview'),
    path('inventory/low_stock/', views.inventory_low_stock, name='inventory_low_stock'),
    path('inventory/stock/', views.inventory_stock, name='inventory_stock'),
    path('inventory/suppliers/', views.inventory_suppliers, name='inventory_suppliers'),

    # order section

    path('order/overview/', views.order_overview, name='order_overview'),
    path('order/history/', views.order_history, name='order_history'),
    path('order/refund/', views.order_refund, name='order_refund'),
    path('order/return/', views.order_return, name='order_return'),
    path('order/tracking/', views.order_tracking, name='order_tracking'),

    # user section

    path('userman/overview/', views.userman_overview , name='userman_overview'),
    path('userman/admin/', views.userman_admin, name='userman_admin'),
    path('userman/customer/', views.userman_customer, name='userman_customer'),
    path('userman/pharmacist/', views.userman_pharmacist, name='userman_pharmacist'),
    path('userman/staff/', views.userman_staff, name='userman_staff'),

]