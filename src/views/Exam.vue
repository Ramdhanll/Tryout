<template>
  <div>
    <Navbar/>

    <div class="box-timer">
      <p class="timer">00 : 00 : 00</p>
    </div>

    <section class="section-main">
      <div class="container mt-5">
        <div class="row">
          <div class="section-left col-md-6">
            <p class="title-number-question">Soal 1</p>
            <p class="question">Pak Arif membeli motor dengan harga Rp15.000.000,00 dan dijual lagi dengan harga Rp16.500.000,00. Berapa perentase keuntungan yang diperoleh?</p>
            <ul>
              <li>
                <div class="form-check">
                  <label class="form-check-label">
                    <input type="radio" class="form-check-input" name="answer" id="" value="checdkedValue" >
                      A. 1%
                  </label>
                </div>
              </li>
              <li>
                <div class="form-check">
                  <label class="form-check-label">
                    <input type="radio" class="form-check-input" name="answer" id="" value="checkedValue" >
                      B. 1.5%
                  </label>
                </div>
              </li>
              <li>
                <div class="form-check">
                  <label class="form-check-label">
                    <input type="radio" class="form-check-input" name="answer" id="" value="checkedValue" >
                      C. 10%
                  </label>
                </div>
              </li>
              <li>
                <div class="form-check">
                  <label class="form-check-label">
                    <input type="radio" class="form-check-input" name="answer" id="" value="checkedValue" >
                      D. 15%
                  </label>
                </div>
              </li>
            </ul>
  
            <button class="btn btn-select py-2 px-4 mt-5">Pilih dan Lanjutkan</button>
            <button class="btn btn-bepassed py-2 px-4 mt-5 ml-2">Dilewati</button>
  
          </div>
          <div class="section-right col-md-6">
            <h3 class="mb-3 ml-1">Daftar Soal</h3>
            <div class="number-question">
              <div class="box">1</div>
              <div class="box">2</div>
              <div class="box">3</div>
              <div class="box">4</div>
              <div class="box">5</div>
              <div class="box">6</div>
              <div class="box">7</div>
              <div class="box">8</div>
              <div class="box">9</div>
              <div class="box">10</div>
              <div class="box">11</div>
              <div class="box">12</div>
              <div class="box">13</div>
              <div class="box">14</div>
              <div class="box">15</div>
              <div class="box">16</div>
              <div class="box">17</div>
              <div class="box">18</div>
              <div class="box">19</div>
              <div class="box">20</div>
              <div class="box">21</div>
              <div class="box">22</div>
              <div class="box">23</div>
              <div class="box">24</div>
              <div class="box">25</div>
              <div class="box">26</div>
              <div class="box">27</div>
              <div class="box">28</div>
              <div class="box">29</div>
              <div class="box">30</div>
              <div class="box">31</div>
              <div class="box">32</div>
              <div class="box">33</div>
              <div class="box">34</div>
              <div class="box">35</div>
              <div class="box">36</div>
              <div class="box">37</div>
              <div class="box">38</div>
              <div class="box">39</div>
              <div class="box">40</div>
              <div class="box">41</div>
              <div class="box">42</div>
              <div class="box">43</div>
              <div class="box">44</div>
              <div class="box">45</div>
              <div class="box">46</div>
              <div class="box">47</div>
              <div class="box">48</div>
              <div class="box">49</div>
              <div class="box">50</div>
            </div>
            <div class="note">
              <div class="box-answered"></div>
              <p>Dijawab</p>
              <div class="box-bepassed"></div>
              <p>Dilewati</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Footer/>
  </div>
</template>

<script>
import Navbar from '../components/Navbar-tryout'
import Footer from '../components/Footer-tryout'

export default {
  components : {
    Navbar, Footer
  },

}
</script>

<style>

</style>