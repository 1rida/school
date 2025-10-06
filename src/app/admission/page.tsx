"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AdmissionForm() {
  return (
    <>
      <Header />

      <main
        className="min-h-screen bg-cover bg-center py-10 px-4"
        style={{ backgroundImage: "url('/images/main.jpg')" }}
      >
        <div className="max-w-3xl mx-auto bg-white bg-opacity-90 shadow-lg rounded-lg mt-[90px] p-8 border">
          {/* School Title */}
          <h1 className="text-center text-xl font-bold text-gray-800 uppercase">
            GLOBAL EDUCATIONAL HIGHER SECONDARY SCHOOL
          </h1>
          <p className="text-center text-sm text-gray-600">
            Montessori to Matric, Intermediate (XI, XII) <br />
            Science, Arts & Commerce <br />
            Separate Boys & Girls
          </p>

          <h2 className="text-center font-semibold text-lg mt-4 underline">
            GLOBAL EDUCATIONAL IT PROGRAM <br /> ADMISSION FORM
          </h2>

          <h3 className="mt-6 font-bold">APPLICANT,S GENERAL PROFILE:</h3>

          {/* Form Fields */}
          <form className="mt-4 space-y-4">
            <div>
              <label className="block font-semibold">Full Name:</label>
              <input
                type="text"
                className="w-full border p-2 rounded-md"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label className="block font-semibold">
                Father&apos;s/Guardian&apos;s Name:
              </label>
              <input
                type="text"
                className="w-full border p-2 rounded-md"
                placeholder="Enter father's/guardian's name"
              />
            </div>

            <div>
              <label className="block font-semibold">Date of Birth:</label>
              <input type="date" className="w-full border p-2 rounded-md" />
            </div>

            <div>
              <label className="block font-semibold">CNIC / B-Form No.:</label>
              <input
                type="text"
                className="w-full border p-2 rounded-md"
                placeholder="Enter CNIC or B-Form No."
              />
            </div>

            <div>
              <label className="block font-semibold">Contact Number:</label>
              <input
                type="text"
                className="w-full border p-2 rounded-md"
                placeholder="03XXXXXXXXX"
              />
            </div>

            <div>
              <label className="block font-semibold">Email (if available):</label>
              <input
                type="email"
                className="w-full border p-2 rounded-md"
                placeholder="Enter email address"
              />
            </div>

            <div>
              <label className="block font-semibold">Home Address:</label>
              <textarea
                className="w-full border p-2 rounded-md"
                placeholder="Enter full home address"
              ></textarea>
            </div>

            {/* Qualification */}
            <div>
              <label className="block font-semibold">Last Qualification:</label>
              <div className="flex gap-6 mt-2">
                <label>
                  <input type="checkbox" /> Matric
                </label>
                <label>
                  <input type="checkbox" /> Intermediate
                </label>
                <label>
                  <input type="checkbox" /> Graduate
                </label>
              </div>
              <input
                type="text"
                className="w-full border p-2 rounded-md mt-2"
                placeholder="Other (if any)"
              />
            </div>

            {/* Orphan Status Section */}
            <div className="mt-6 border-t pt-4">
              <h3 className="font-bold">ORPHAN STATUS:</h3>

              <p className="mt-2 font-medium">Are you an Orphan (YATEEM)?</p>
              <div className="flex gap-6 mt-1">
                <label>
                  <input type="radio" name="orphan" /> Yes
                </label>
                <label>
                  <input type="radio" name="orphan" /> No
                </label>
              </div>

              <h4 className="mt-4 font-semibold">
                Required Documents (Tick if Attached):
              </h4>
              <div className="grid grid-cols-2 gap-2 mt-2">
                <label>
                  <input type="checkbox" /> Maktab/B-Form/CNIC of child
                </label>
                <label>
                  <input type="checkbox" /> Guardian&apos;s CNIC
                </label>
                <label>
                  <input type="checkbox" /> Father&apos;s Death Certificate
                </label>
                <label>
                  <input type="checkbox" /> Passport-sized Photographs (2)
                </label>
              </div>
            </div>

             {/* Required Documents */}
  <h4 className="mt-4 font-semibold underline">
    REQUIRED DOCUMENTS (TICK IF ATTACHED):
  </h4>
  <div className="grid grid-cols-2 gap-2 mt-2">
    <label className="flex items-center gap-2">
      <input type="checkbox" /> Maktab/B-Form/CNIC of child
    </label>
    <label className="flex items-center gap-2">
      <input type="checkbox" /> Guardian&apos;s CNIC
    </label>
    <label className="flex items-center gap-2">
      <input type="checkbox" /> Father&apos;s Death Certificate
    </label>
    <label className="flex items-center gap-2">
      <input type="checkbox" /> Passport-sized Photographs (2)
    </label>
  </div>

            {/* IT Course Enrollment Section */}
            <div className="mt-6 border-t pt-4">
              <h3 className="font-bold">IT COURSE ENROLLMENT:</h3>
              <p className="mt-2 font-medium">Course Applying For:</p>
              <div className="grid grid-cols-2 gap-2 mt-2">
                <label>
                  <input type="checkbox" /> Basic Computer Skills
                </label>
                <label>
                  <input type="checkbox" /> MS Office Word (2 months)
                </label>
                <label>
                  <input type="checkbox" /> MS Excel (2 months)
                </label>
                <label>
                  <input type="checkbox" /> MS PowerPoint (1 month)
                </label>
                <label>
                  <input type="checkbox" /> Adobe Illustration (2 months)
                </label>
                <label>
                  <input type="checkbox" /> Adobe Photoshop (2 months)
                </label>
                <label>
                  <input type="checkbox" /> Adobe Premiere Pro CC (2 months)
                </label>
                <label>
                  <input type="checkbox" /> Adobe After Effects (2 months)
                </label>
                <label>
                  <input type="checkbox" /> CapCut (1 month)
                </label>
                <label>
                  <input type="checkbox" /> Canva (1 month)
                </label>
                <label>
                  <input type="checkbox" /> HTML (4 months)
                </label>
                <label>
                  <input type="checkbox" /> JavaScript (4 months)
                </label>
                <label>
                  <input type="checkbox" /> C and C++ (1 month)
                </label>
                <label>
                  <input type="checkbox" /> TypeScript (4 months)
                </label>
                <label>
                  <input type="checkbox" /> Python (4 months)
                </label>
                <label>
                  <input type="checkbox" /> SQL (2 months)
                </label>
                <label>
                  <input type="checkbox" /> Website Inspiration (1 month)
                </label>
                <label>
                  <input type="checkbox" /> Google (1 month)
                </label>
                <label>
                  <input type="checkbox" /> Smart Working by Internet (1 month)
                </label>
                <label>
                  <input type="checkbox" /> Account Making (1 month)
                </label>
                <label>
                  <input type="checkbox" /> Operating Basic & Installation (1 month)
                </label>
              </div>

              <div className="mt-2">
                <label className="block font-semibold">Other (On Test):</label>
                <input
                  type="text"
                  className="w-full border p-2 rounded-md mt-1"
                  placeholder="Enter other course (if any)"
                />
              </div>
            </div>

            {/* Submit */}
            <div className="text-center mt-6">
              <button
                type="submit"
                className="bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-800 transition"
              >
                Submit Form
              </button>
            </div>
          </form>
        </div>
      </main>

      <Footer />
    </>
  );
}
