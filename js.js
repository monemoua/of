// Save user info on Sign Up
function saveSignup() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if(email ===""){
      alert("📧ກະລຸນາປ້ອນອີເມວຂອງທ່ານກ່ອນ");
      return;
    }
    
     if(password.length < 6 ) {
      alert("❌ ລະຫັດຜ່ານຕ້ອງມີ 6 ຕົວຂື້ນໄປ.");
      return;
     }
 
    if (email && password) {  

      let users = JSON.parse(localStorage.getItem("users")) || [];
  
      // Add new user
      users.push({ email, password }); 
  
      // Save updated list
      localStorage.setItem("users", JSON.stringify(users));     
  
      alert("✅ ທ່ານສະໝັກສໍາເລັດແລ້ວ!");

      window.location.href = "Login.html";    

    } else {

      alert("❌ ກະລຸນາລອງໃໝ່ອີກຄັ້ງ .");

    }
  }
  
  
  // Check user info on Login
  function saveLogin() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    const users = JSON.parse(localStorage.getItem("users")) || [];
  
    const found = users.find(user => user.email === email && user.password === password);


    if(email===""){ 

      alert("ກະລຸນາປ້ອນອີເມວຂອງທ່ານກ່ອນ📧");  
      
      return false;
    }
    
    if(password ===""){ 
      
      alert("ກະລຸນາປ້ອນລະຫັດຜ່ານຂອງທ່ານກ່ອນ🔑");

      return false;

    }

    if (found) {
      alert("✅ ລັອກອິນ ສຳເລັດແລ້ວ!");
      window.location.href = "dex1.html"; 

    } else {

      alert("❌ ອີເມວ ຫຼື ລະຫັດຜ່ານບໍ່ຖືກຕ້ອງ.");

    }
  }
  