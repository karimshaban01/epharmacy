let dashboard = document.getElementById('dashboard');
let product = document.getElementById('product');
let userman = document.getElementById('userman');
let inventory = document.getElementById('inventory');
let sales = document.getElementById('sales');
let order = document.getElementById('order');
let billing = document.getElementById('bills');
let batch = document.getElementById('batch');
let analytics = document.getElementById('analytics');
let compliance = document.getElementById('compliance');
let branches = document.getElementById('branches');
let integration = document.getElementById('integration');

// dashboard section

dashboard.addEventListener('click', ()=>{
       fetch('dashboard/').then(response => response.text())
       .then(html=>{
        window.parent.document.getElementById('central-body').innerHTML = html;
       }).catch(error => console.error('Error loading content: ', error));
});

//product catalog section

product.addEventListener('click', ()=>{
    fetch('product/').then(response => response.text())
       .then(html=>{
        window.parent.document.getElementById('central-body').innerHTML = html;
       }).catch(error => console.error('Error loading content: ', error));
});

// user manager section

userman.addEventListener('click', ()=> {
    fetch('userman/').then(response => response.text())
       .then(html=>{
        window.parent.document.getElementById('central-body').innerHTML = html;

        fetch('userman/overview/').then(response => response.text())
            .then(html => {
                window.parent.document.getElementById('iframe-main').innerHTML = html;
            }).catch(error => console.error('Error loading content: ', error));

        document.getElementById('overview').addEventListener('click', ()=>{
            fetch('userman/overview/').then(response => response.text())
            .then(html => {
                window.parent.document.getElementById('iframe-main').innerHTML = html;
            }).catch(error => console.error('Error loading content: ', error));
        });

        document.getElementById('administrator').addEventListener('click', ()=>{
            fetch('userman/admin').then(response => response.text())
            .then(html => {
                window.parent.document.getElementById('iframe-main').innerHTML = html;
            }).catch(error => console.error('Error loading content: ', error));
        });

        document.getElementById('pharmacist').addEventListener('click', ()=>{
                fetch('userman/pharmacist/').then(response => response.text())
                .then(html => {
                    window.parent.document.getElementById('iframe-main').innerHTML = html;
                }).catch(error => console.error('Error loading content: ', error));
        });

        document.getElementById('staff').addEventListener('click', ()=>{
                fetch('userman/staff').then(response => response.text())
                .then(html => {
                    window.parent.document.getElementById('iframe-main').innerHTML = html;
                }).catch(error => console.error('Error loading content: ', error));
        });

        document.getElementById('customers').addEventListener('click', ()=>{
                fetch('userman/customer').then(response => response.text())
                .then(html => {
                    window.parent.document.getElementById('iframe-main').innerHTML = html;
                }).catch(error => console.error('Error loading content: ', error));
            });

       }).catch(error => console.error('Error loading content: ', error));

});

// inventory management section

inventory.addEventListener('click', ()=>{
    fetch('inventory/').then(response => response.text())
       .then(html=>{
        window.parent.document.getElementById('central-body').innerHTML = html;

        fetch('inventory/overview/').then(response => response.text())
            .then(html => {
                window.parent.document.getElementById('iframe-main').innerHTML = html;
            }).catch(error => console.error('Error loading content: ', error));

        document.getElementById('overview').addEventListener('click', ()=>{
            fetch('inventory/overview/').then(response => response.text())
            .then(html => {
                window.parent.document.getElementById('iframe-main').innerHTML = html;
            }).catch(error => console.error('Error loading content: ', error));
        });

        document.getElementById('low-stock').addEventListener('click', ()=>{
            fetch('inventory/low_stock/').then(response => response.text())
            .then(html => {
                window.parent.document.getElementById('iframe-main').innerHTML = html;
            }).catch(error => console.error('Error loading content: ', error));
        });

        document.getElementById('stock').addEventListener('click', ()=>{
                fetch('inventory/stock/').then(response => response.text())
                .then(html => {
                    window.parent.document.getElementById('iframe-main').innerHTML = html;
                }).catch(error => console.error('Error loading content: ', error));
        });

        document.getElementById('supplier').addEventListener('click', ()=>{
                fetch('inventory/suppliers/').then(response => response.text())
                .then(html => {
                    window.parent.document.getElementById('iframe-main').innerHTML = html;
                }).catch(error => console.error('Error loading content: ', error));
        });

       }).catch(error => console.error('Error loading content: ', error));
});

// sales section

sales.addEventListener('click', ()=>{
    fetch('sales/').then(response => response.text())
       .then(html=>{
        window.parent.document.getElementById('central-body').innerHTML = html;

        fetch('sales/overview/').then(response => response.text())
            .then(html => {
                window.parent.document.getElementById('iframe-main').innerHTML = html;
            }).catch(error => console.error('Error loading content: ', error));

        document.getElementById('overview').addEventListener('click', ()=>{
            fetch('sales/overview/').then(response => response.text())
            .then(html => {
                window.parent.document.getElementById('iframe-main').innerHTML = html;
            }).catch(error => console.error('Error loading content: ', error));
        });

        document.getElementById('available-order').addEventListener('click', ()=>{
            fetch('sales/orders/').then(response => response.text())
            .then(html => {
                window.parent.document.getElementById('iframe-main').innerHTML = html;
            }).catch(error => console.error('Error loading content: ', error));
        });

        document.getElementById('pricing').addEventListener('click', ()=>{
                fetch('sales/pricing/').then(response => response.text())
                .then(html => {
                    window.parent.document.getElementById('iframe-main').innerHTML = html;
                }).catch(error => console.error('Error loading content: ', error));
        });

        document.getElementById('discount').addEventListener('click', ()=>{
            
                fetch('sales/discount').then(response => response.text())
                .then(html => {
                    window.parent.document.getElementById('iframe-main').innerHTML = html;
                }).catch(error => console.error('Error loading content: ', error));
        });

        document.getElementById('invoice').addEventListener('click', ()=>{
                fetch('sales/invoice/').then(response => response.text())
                .then(html => {
                    window.parent.document.getElementById('iframe-main').innerHTML = html;
                }).catch(error => console.error('Error loading content: ', error));
        });

       }).catch(error => console.error('Error loading content: ', error));
});

//orders section

order.addEventListener('click', ()=>{
    fetch('order/').then(response => response.text())
       .then(html=>{
        window.parent.document.getElementById('central-body').innerHTML = html;

        fetch('order/overview/').then(response => response.text())
            .then(html => {
                window.parent.document.getElementById('iframe-main').innerHTML = html;
            }).catch(error => console.error('Error loading content: ', error));

        document.getElementById('overview').addEventListener('click', ()=>{
            fetch('order/overview/').then(response => response.text())
            .then(html => {
                window.parent.document.getElementById('iframe-main').innerHTML = html;
            }).catch(error => console.error('Error loading content: ', error));
        });

        document.getElementById('tracking').addEventListener('click', ()=>{
            fetch('order/tracking/').then(response => response.text())
            .then(html => {
                window.parent.document.getElementById('iframe-main').innerHTML = html;
            }).catch(error => console.error('Error loading content: ', error));
        });

        document.getElementById('history').addEventListener('click', ()=>{
                fetch('order/history/').then(response => response.text())
                .then(html => {
                    window.parent.document.getElementById('iframe-main').innerHTML = html;
                }).catch(error => console.error('Error loading content: ', error));
        });

        document.getElementById('return').addEventListener('click', ()=>{
                fetch('order/return/').then(response => response.text())
                .then(html => {
                    window.parent.document.getElementById('iframe-main').innerHTML = html;
                }).catch(error => console.error('Error loading content: ', error));
        });

        document.getElementById('refund').addEventListener('click', ()=>{
                fetch('order/refund/').then(response => response.text())
                .then(html => {
                    window.parent.document.getElementById('iframe-main').innerHTML = html;
                }).catch(error => console.error('Error loading content: ', error));
        });

       }).catch(error => console.error('Error loading content: ', error));
});

//billing section

billing.addEventListener('click', ()=>{
    fetch('bills/').then(response => response.text())
       .then(html=>{
        window.parent.document.getElementById('central-body').innerHTML = html;

        fetch('bills/overview/').then(response => response.text())
            .then(html => {
                window.parent.document.getElementById('iframe-main').innerHTML = html;
            }).catch(error => console.error('Error loading content: ', error));

        document.getElementById('overview').addEventListener('click', ()=>{
            fetch('bills/overview/').then(response => response.text())
            .then(html => {
                window.parent.document.getElementById('iframe-main').innerHTML = html;
            }).catch(error => console.error('Error loading content: ', error));
        });

        document.getElementById('tracking').addEventListener('click', ()=>{
            fetch('bills/tracking/').then(response => response.text())
            .then(html => {
                window.parent.document.getElementById('iframe-main').innerHTML = html;
            }).catch(error => console.error('Error loading content: ', error));
        });

        document.getElementById('options').addEventListener('click', ()=>{
                fetch('bills/options/').then(response => response.text())
                .then(html => {
                    window.parent.document.getElementById('iframe-main').innerHTML = html;
                }).catch(error => console.error('Error loading content: ', error));
        });

        document.getElementById('tax').addEventListener('click', ()=>{
                fetch('bills/tax/').then(response => response.text())
                .then(html => {
                    window.parent.document.getElementById('iframe-main').innerHTML = html;
                }).catch(error => console.error('Error loading content: ', error));
        });
        
       }).catch(error => console.error('Error loading content: ', error));
});

// batch section

batch.addEventListener('click', ()=>{
    fetch('batch/').then(response => response.text())
       .then(html=>{
        window.parent.document.getElementById('central-body').innerHTML = html;

        fetch('batch/overview/').then(response => response.text())
            .then(html => {
                window.parent.document.getElementById('iframe-main').innerHTML = html;
            }).catch(error => console.error('Error loading content: ', error));

        document.getElementById('overview').addEventListener('click', ()=>{
            fetch('batch//overview/').then(response => response.text())
            .then(html => {
                window.parent.document.getElementById('iframe-main').innerHTML = html;
            }).catch(error => console.error('Error loading content: ', error));
        });

        document.getElementById('expiry').addEventListener('click', ()=>{
            fetch('batch/expiry/').then(response => response.text())
            .then(html => {
                window.parent.document.getElementById('iframe-main').innerHTML = html;
            }).catch(error => console.error('Error loading content: ', error));
        });

        document.getElementById('near-expire').addEventListener('click', ()=>{
                fetch('batch/near_expiry/').then(response => response.text())
                .then(html => {
                    window.parent.document.getElementById('iframe-main').innerHTML = html;
                }).catch(error => console.error('Error loading content: ', error));
        });

        document.getElementById('expired').addEventListener('click', ()=>{
                fetch('batch/expired/').then(response => response.text())
                .then(html => {
                    window.parent.document.getElementById('iframe-main').innerHTML = html;
                }).catch(error => console.error('Error loading content: ', error));
        });
        
       }).catch(error => console.error('Error loading content: ', error));
});

// analytics section

analytics.addEventListener('click', ()=>{
    fetch('analytics/').then(response => response.text())
       .then(html=>{
        window.parent.document.getElementById('central-body').innerHTML = html;

        fetch('analytics/overview/').then(response => response.text())
            .then(html => {
                window.parent.document.getElementById('iframe-main').innerHTML = html;
            }).catch(error => console.error('Error loading content: ', error));

        document.getElementById('overview').addEventListener('click', ()=>{
            fetch('analytics/overview/').then(response => response.text())
            .then(html => {
                window.parent.document.getElementById('iframe-main').innerHTML = html;
            }).catch(error => console.error('Error loading content: ', error));
        });

        document.getElementById('asales').addEventListener('click', ()=>{
            fetch('analytics/sales/').then(response => response.text())
            .then(html => {
                window.parent.document.getElementById('iframe-main').innerHTML = html;
            }).catch(error => console.error('Error loading content: ', error));
        });

        document.getElementById('ainventory').addEventListener('click', ()=>{
                fetch('analytics/inventory/').then(response => response.text())
                .then(html => {
                    window.parent.document.getElementById('iframe-main').innerHTML = html;
                }).catch(error => console.error('Error loading content: ', error));
        });

        document.getElementById('customer').addEventListener('click', ()=>{
                fetch('analytics/customer/').then(response => response.text())
                .then(html => {
                    window.parent.document.getElementById('iframe-main').innerHTML = html;
                }).catch(error => console.error('Error loading content: ', error));
        });
        
       }).catch(error => console.error('Error loading content: ', error));
});

// compliance section

compliance.addEventListener('click', ()=>{
    fetch('compliance/').then(response => response.text())
       .then(html=>{
        window.parent.document.getElementById('central-body').innerHTML = html;

        fetch('compliance/overview/').then(response => response.text())
            .then(html => {
                window.parent.document.getElementById('iframe-main').innerHTML = html;
            }).catch(error => console.error('Error loading content: ', error));

        document.getElementById('overview').addEventListener('click', ()=>{
            fetch('compliance/overview/').then(response => response.text())
            .then(html => {
                window.parent.document.getElementById('iframe-main').innerHTML = html;
            }).catch(error => console.error('Error loading content: ', error));
        });

        document.getElementById('tra').addEventListener('click', ()=>{
            fetch('compliance/tra/').then(response => response.text())
            .then(html => {
                window.parent.document.getElementById('iframe-main').innerHTML = html;
            }).catch(error => console.error('Error loading content: ', error));
        });

        document.getElementById('tmda').addEventListener('click', ()=>{
                fetch('compliance/tmda/').then(response => response.text())
                .then(html => {
                    window.parent.document.getElementById('iframe-main').innerHTML = html;
                }).catch(error => console.error('Error loading content: ', error));
        });

        document.getElementById('other').addEventListener('click', ()=>{
                fetch('compliance/other/').then(response => response.text())
                .then(html => {
                    window.parent.document.getElementById('iframe-main').innerHTML = html;
                }).catch(error => console.error('Error loading content: ', error));
        });
        
       }).catch(error => console.error('Error loading content: ', error));
});

// branches section

branches.addEventListener('click', ()=>{
    fetch('branches/').then(response => response.text())
       .then(html=>{
        window.parent.document.getElementById('central-body').innerHTML = html;

        fetch('branches/overview/').then(response => response.text())
            .then(html => {
                window.parent.document.getElementById('iframe-main').innerHTML = html;
            }).catch(error => console.error('Error loading content: ', error));

        document.getElementById('overview').addEventListener('click', ()=>{
            fetch('branches/overview/').then(response => response.text())
            .then(html => {
                window.parent.document.getElementById('iframe-main').innerHTML = html;
            }).catch(error => console.error('Error loading content: ', error));
        });

        document.getElementById('warehouse').addEventListener('click', ()=>{
            fetch('branches/warehouse/').then(response => response.text())
            .then(html => {
                window.parent.document.getElementById('iframe-main').innerHTML = html;
            }).catch(error => console.error('Error loading content: ', error));
        });

        document.getElementById('branch').addEventListener('click', ()=>{
                fetch('branches/branches/').then(response => response.text())
                .then(html => {
                    window.parent.document.getElementById('iframe-main').innerHTML = html;
                }).catch(error => console.error('Error loading content: ', error));
        });

        document.getElementById('expansion').addEventListener('click', ()=>{
                fetch('branches/expansion/').then(response => response.text())
                .then(html => {
                    window.parent.document.getElementById('iframe-main').innerHTML = html;
                }).catch(error => console.error('Error loading content: ', error));
        });
        
       }).catch(error => console.error('Error loading content: ', error));
});

// integration section

integration.addEventListener('click', ()=>{
    fetch('integration/').then(response => response.text())
       .then(html=>{
        window.parent.document.getElementById('central-body').innerHTML = html;

        fetch('integration/overview/').then(response => response.text())
            .then(html => {
                window.parent.document.getElementById('iframe-main').innerHTML = html;
            }).catch(error => console.error('Error loading content: ', error));

        document.getElementById('overview').addEventListener('click', ()=>{
            fetch('integration/overview/').then(response => response.text())
            .then(html => {
                window.parent.document.getElementById('iframe-main').innerHTML = html;
            }).catch(error => console.error('Error loading content: ', error));
        });

        document.getElementById('barcode').addEventListener('click', ()=>{
            fetch('integration/barcode/').then(response => response.text())
            .then(html => {
                window.parent.document.getElementById('iframe-main').innerHTML = html;
            }).catch(error => console.error('Error loading content: ', error));
        });

        document.getElementById('accounting').addEventListener('click', ()=>{
                fetch('integration/accounting/').then(response => response.text())
                .then(html => {
                    window.parent.document.getElementById('iframe-main').innerHTML = html;
                }).catch(error => console.error('Error loading content: ', error));
        });

        document.getElementById('prescription').addEventListener('click', ()=>{
                fetch('integration/prescription/').then(response => response.text())
                .then(html => {
                    window.parent.document.getElementById('iframe-main').innerHTML = html;
                }).catch(error => console.error('Error loading content: ', error));
        });
        
       }).catch(error => console.error('Error loading content: ', error));
});