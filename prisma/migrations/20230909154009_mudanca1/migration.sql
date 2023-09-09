-- CreateTable
CREATE TABLE "Consultation" (
    "id" SERIAL NOT NULL,
    "patientName" TEXT NOT NULL,
    "doctorName" TEXT NOT NULL,
    "selectedDate" TEXT NOT NULL,
    "duration" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "Consultation_pkey" PRIMARY KEY ("id")
);
