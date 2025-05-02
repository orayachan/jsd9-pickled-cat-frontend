import { TiLocation } from "react-icons/ti";
import { RiMailOpenFill } from "react-icons/ri";
import { MdLocalPhone } from "react-icons/md";

export function AboutUs() {
    return (
        // <!-- Contact Us -->
        <section id="contact" class="mx-4 mb-16 bg-white">
          <div class="flex flex-col relative mx-auto max-w-screen-xl justify-center">
            <div className="flex flex-col">
                {/* <!-- Title --> */}
            <div class="m-6 flex flex-col items-start">
              <h2 class="text-primary-700 text-4xl font-bold">ติดต่อเรา</h2>
            </div>
  
            <div class="m-4 flex flex-col justify-between gap-8 lg:flex-row">
            <div class="border-primary-500 flex-[1] rounded-3xl border-2 min-w-70 max-w-220">
                <div class="m-8 flex flex-col justify-center gap-2">
                  <div class="flex flex-row gap-4">
                  <TiLocation className="w-[40px] h-[40px] mb-4" />
                    <h2 class="text-primary-700 self-center text-2xl font-bold">
                        สถานที่ตั้ง
                    </h2>
                  </div>
                  <h3 class="text-primary-800">
                    110/1 อาคารเคเอ็กซ์ <br></br> ถนนกรุงธนบุรี แขวงบางลำภูล่าง <br></br> เขตคลองสาน กรุงเทพมหานคร <br></br> <strong>10600</strong>
                  </h3>
                </div>
              </div>
  
              <div class="border-primary-500 flex-[1] rounded-3xl border-2 min-w-70 max-w-220">
                <div class="m-8 flex flex-col justify-center gap-2">
                  <div class="flex flex-row gap-4">
                  <RiMailOpenFill className="w-[40px] h-[40px] mb-4" />
                    <h2 class="text-primary-700 self-center text-2xl font-bold">
                    อีเมลล์
                    </h2>
                  </div>
                  <h3 class="text-primary-800">
                  contact@pickledcat.com
                  </h3>
                </div>
              </div>
  
              <div class="border-primary-500 flex-[1] rounded-3xl border-2 min-w-70 max-w-220">
                <div class="m-8 flex flex-col justify-center gap-2">
                  <div class="flex flex-row gap-4">
                  <MdLocalPhone className="w-[40px] h-[40px] mb-4" />
                    <h2 class="text-primary-700 self-center text-2xl font-bold">
                    เบอร์โทรศัพท์
                    </h2>
                  </div>
                  <h3 class="text-primary-800">
                  (+66) 99 999 9999
                  </h3>
                </div>
              </div>
            </div>
            </div>
  
            {/* <!-- Map --> */}
            <div
              class="bg-secondary-50 mx-4 my-8 flex justify-center rounded-3xl p-4 max-w-220 lg:max-w-1280 lg:min-w-225"
            >
              <iframe
                class="h-[450px] max-h-[1280px] w-full max-w-[1280px] border-0"
                loading="lazy"
                allowfullscreen
                referrerpolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.5470967393924!2d100.52318681537399!3d13.73671709035106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29ed5b4b0a6f1%3A0x49b6c87cf3734b5f!2z4LiL4Lit4Liy4LiE4Lij4LiZ4LiXIOC4geC4suC4h-C4nuC4seC4h-C4oiDguK3guJnguLLguIfguJ7guKPguLUg4LiB4Liy4LiH4Lij4Li44LiUIOaYjuiBlOWFqOiBnuGYn-W8gOW6lw!5e0!3m2!1sth!2sth!4v1648623661993!5m2!1sth!2sth"
              >
              </iframe>
            </div>
          </div>
        </section>
    )
}