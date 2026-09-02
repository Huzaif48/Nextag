
// sweet alert for product buy

function buy() {
    Swal.fire({
        title: 'Order Placed!',
        text: 'Thanks for your purchase. We’ve received your order and it’s being processed.',
        icon: 'success',
        showConfirmButton: true,
        confirmButtonText: 'Continue Shopping',
        confirmButtonColor: '#38220f', // dark coffee
        footer: '<span style="font-size: 0.85rem; color: black;">Need help? <a style="color: #c49b66;" href="../contactus.html">Contact Support</a></span>',
        background: '#f4f1ec', // almost black
        color: '#38220f', // light text for contrast
        padding: '1.5rem',
        customClass: {
            popup: 'swal2-border-radius'
        }
    });
}

// sweet alert for email recived

function confirmEmail(e) {
    e.preventDefault(); // Stop form submission

    Swal.fire({
        title: '✅ Email Confirmed!',
        html: '<b>Thank you for subscribing!</b><br>You’ll now receive the latest updates and offers.',
        icon: 'success',
        confirmButtonText: 'Awesome!',
        confirmButtonColor: '#38220f', // dark coffee
        background: '#f4f1ec', // light coffee background
        color: '#38220f', // dark text for contrast
        backdrop: `rgba(0, 0, 0, 0.7)`, // lighter dark backdrop
        customClass: {
            popup: 'rounded-popup'
        }
    }).then(() => {
        e.target.reset(); // Clear all form inputs after confirmation
    });
}

// sweetalert for cart 

function cart() {
    Swal.fire({
        title: 'CART',
        text: 'Your Product Succesfully Add In Your Cart!',
        icon: 'success',
        showConfirmButton: true,
        confirmButtonText: 'Continue Shopping',
        confirmButtonColor: '#38220f', // dark coffee
        footer: '<span style="font-size: 0.85rem; color: black;">Need help? <a style="color: #c49b66;" href="contactus.html">Contact Support</a></span>',
        background: '#f4f1ec', // almost blackc
        color: '#38220f', // light text for contrast
        padding: '1.5rem',
        customClass: {
            popup: 'swal2-border-radius'
        }
    });
}

//sweet alert for feature product

function feature() {
    Swal.fire({
      title: 'SORRY!',
      text: 'This color is currently out of stock, but it will be available again very soon.',
      icon: 'warning',                      // “warning” fits better than “success”
      showConfirmButton: true,
      confirmButtonText: 'Continue Shopping',
      confirmButtonColor: '#38220f',        // dark‑coffee accent
      footer:
        '<span style="font-size:0.85rem;color:black;">Need help? <a style="color:#c49b66;" href="../contactus.html">Contact Support</a></span>',
      background: '#f4f1ec',
      color: '#38220f',
      padding: '1.5rem',
      customClass: {
        popup: 'swal2-border-radius'
      }
    });
  }
  


//for drop down

document.getElementById('pageDropdown').addEventListener('change', function () {
    if (this.value) {
        window.location.href = this.value;
    }
});