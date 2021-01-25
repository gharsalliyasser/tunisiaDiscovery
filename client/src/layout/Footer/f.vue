<template>
    <div class="footer">
        <div class="footer-content">
            <div class="about">
                <h1 class="title"><span>Tunisia</span>Discovery</h1>
                <p>
                    Completely renovated in 2014, endowed with a unique charm that of a green garden trimmed with palm trees and various plants as well as a magnificent sandy beach to which there is a direct access, Hammamet Regency Hotel provides well-being and relaxation. 
Being one of the largest in the region, our 190 rooms and suites are all fitted with air conditioning and central heating, hairdryer, satellite TV, private bath with separate toilet, balcony or terrace... 
With three restaurants and four bars, Hammamet Regency Hotel provides a choice which guarantees every kind of pleasure. 
Our main restaurant, which has a beautiful terrace overlooking the pool and garden, offers a buffet of diverse local and international cuisine, meeting everyone’s expectations. 
                </p>
            </div>
            <div class="contact">
                <span><i class="fas fa-phone"></i> &nbsp; 00216 22 22 22 22</span>
                <span><i class="fas fa-envelope"></i> &nbsp; contact@tunisia.com</span>
            </div>
        </div>
        <div class="footer-bottom">
        &copy; Tunisia Discovery
        </div>
    </div>
</template>
<script>
export default {
  name: "f",
  data: () => ({}),
};
</script>
<style scoped>
.footer {
  background: rgb(33, 52, 95);
  color: white;
  height: 400px;
  width: 100%;
}
.footer .footer-content {
border: 1px solid white;
height: 350px;
display: flex;
}
.footer .footer-content .about {
    flex: 1;
    padding: 25px;
}
.footer .footer-bottom {
  background: rgba(33, 52, 95, 0.856);
  color: white;
  height: 50px;
  width: 100%;
  text-align: center;
  position: absolute;
  bottom: 0px;
  left: 0px;
  padding-top: 20px;
} 
</style>