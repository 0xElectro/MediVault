import React from 'react';
import { Link } from 'react-router-dom';

export default function ProHero() {
    return (
        <section className="relative overflow-hidden bg-white py-20 sm:py-32">
            <div className="absolute inset-0 bg-[radial-gradient(#13ecec_1px,transparent_1px)] [background-size:16px_16px] opacity-[0.1] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
                    <div className="flex flex-col justify-center text-left">
                        <div className="mb-6 inline-flex w-fit items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-[#0ea5a5]">
                            <span className="material-symbols-outlined mr-1 text-sm">verified_user</span>
                            HIPAA Compliant &amp; Secure
                        </div>
                        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl xl:text-6xl mb-6">
                            Life-Saving Data at the <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0ea5a5] to-primary">Speed of a Scan</span>
                        </h1>
                        <p className="mb-8 text-lg leading-8 text-slate-600">
                            MediVault bridges the gap between patient history and emergency response. Secure, AI-summarized medical records accessible instantly via QR code when every second counts.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link to="/register" className="flex items-center justify-center rounded-lg bg-primary px-6 py-3.5 text-base font-bold text-slate-900 shadow-lg shadow-primary/20 transition-all hover:translate-y-[-1px] hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
                                <span className="material-symbols-outlined mr-2">person_add</span>
                                Join as Patient
                            </Link>
                            <Link to="/provider-register" className="flex items-center justify-center rounded-lg border border-slate-200 bg-white px-6 py-3.5 text-base font-bold text-slate-700 shadow-sm transition-all hover:bg-slate-50 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-200 focus:ring-offset-2">
                                <span className="material-symbols-outlined mr-2">stethoscope</span>
                                Join as Provider
                            </Link>
                        </div>
                        <div className="mt-10 flex items-center gap-x-6">
                            <div className="flex -space-x-2 overflow-hidden">
                                <div className="inline-block h-8 w-8 rounded-full bg-slate-200 ring-2 ring-white" data-alt="User avatar 1" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAUgv8xLSB863Q2mzN2RUGPbC97MdgNsrIoFP6QzRXXIDrmdROAb6mNB4B6bNguCty6BPOHNaBF2citha4mTbHs2WIroSKJWaTayrEs8LEuTd1U0YmHZ4V7yeZB4Hs8J0gB1cNdZEQA7FHp3mewHzbLXkHi_CpIqfpoYUZ1GgK_bUsOeiKmU2AqIwqAxEZTzMmT52Z2Yk6SJHStdzJTS5mgYeNYDRm--A6a-dNE-PumPmYEfX4XYfY0WPpPpiNXXCBtbVF0ZygJTL0')", backgroundSize: "cover" }}></div>
                                <div className="inline-block h-8 w-8 rounded-full bg-slate-200 ring-2 ring-white" data-alt="User avatar 2" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCkwjYeJfC2bP5zrn8tI7Y6bxlsxVQl3abF991ufwCckLL2Oi8ioS6FqhkkyYyNjmb6DHT0iM7YMc_6lZcT0f4antEM5Jc4Gqh2xFWccZfimtJWiKgxseujiJdCPuQQRe8wEcSp3zR-eamwYc_EWheC5gp6Dxs5anStYJhFOcNI0k5mBMYEnq_qDnd8gEBsFCYiBnYH1hX5diSUTFL-Y_md63MfjkHPxveUqOXEwDLT7vd1zNBrWFRT6WXt1WjWOzLzwspJkjk6l-k')", backgroundSize: "cover" }}></div>
                                <div className="inline-block h-8 w-8 rounded-full bg-slate-200 ring-2 ring-white" data-alt="User avatar 3" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCj-lSFkW6AARKPUFJIu68LiXPSHg_4VJuLDe4xmT4wDPjc3uG7Z4ySwkLqmrpIYWJpoLsAWWWOKTy8xDq_Ys4e3xn8YAQqg97PyqWgRZOtXsLKhGln9_B_0Ss2G_00yx508N9U0ISwZA8tZPspoTWLTTeqds23TjtxcKlQTvgjzDoXCqFexq5yQN8_dE-l-NpvMVmqemY-1ZYjkTfzMeTLTJS6AvylPVV555-EdJV9dcGvqo9AkfMe9XXEjOpPcHV_95ifQ8qLz1U')", backgroundSize: "cover" }}></div>
                                <div className="inline-block h-8 w-8 rounded-full bg-slate-200 ring-2 ring-white" data-alt="User avatar 4" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDv9fb5ePoRnZUV97cKrBj0V2CG0-CNneNm40iTPbEa9tzYz7k2GgSLWDjkNjZMFefpUb0tu7cGZtuM2klqp1QWjY8rfZ1Yz-bjdqQalo7s16reysRQISdxrXQjT3sz69kUl0kyHYP-GOz4L0OGqn8dOOQktQiLb3Vbiof8QOc29VRYXz3RXnCKkjeQA0ObSte476Zoavk5IR4JleCAAPNEJ84Khaljlk5P5w7BLS8fZTvgOK-ffvZhpuem0qNRCksguV4TNQir7Ck')", backgroundSize: "cover" }}></div>
                            </div>
                            <span className="text-sm font-medium text-slate-500">Trusted by 10,000+ patients</span>
                        </div>
                    </div>
                    <div className="relative lg:h-full lg:min-h-[500px]">
                        <div className="relative h-full w-full overflow-hidden rounded-2xl bg-slate-100 shadow-2xl ring-1 ring-slate-900/10" data-alt="Doctor holding tablet with medical interface" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCIDdpXf7n0icFLxHW9_med2izRhz_KkNkQvhN8wGpfsgm-ftLuC8f0Eddzo3Jha2iyV1aDPxyzQ4CGgMnBNSiUKJUq9cpxNwu6XAIuvqm0F3qoBsD0r3euyYcfFggQ2iMSziiTQp2G32M944NuS6TSkJ0FNGsaTitffMDpcdSwJZipzYp5w-kHZn6CHhXXYMzeTiBXaI-dti5mjknXZ4EE4Q1CuzTUp5X82TseYjqrHG6Re2CbQGATJsMxrH7pBKz8l2R6AoJJFHw')", backgroundSize: "cover", backgroundPosition: "center" }}>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                            <div className="absolute bottom-6 left-6 right-6">
                                <div className="rounded-xl bg-white/95 backdrop-blur p-4 shadow-lg ring-1 ring-black/5">
                                    <div className="flex items-center gap-4">
                                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/20 text-[#0ea5a5]">
                                            <span className="material-symbols-outlined text-3xl">qr_code_scanner</span>
                                        </div>
                                        <div>
                                            <p className="font-bold text-slate-900">Emergency Access Active</p>
                                            <p className="text-sm text-slate-500">Dr. Smith scanned patient ID: #8821</p>
                                        </div>
                                        <div className="ml-auto text-xs font-semibold text-green-600 bg-green-50 px-2 py-1 rounded">
                                            Live
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
