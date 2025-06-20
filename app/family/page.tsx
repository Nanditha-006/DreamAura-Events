"use client";
import Countdown from '@/components/elements/Countdown'
import Layout from "@/components/layout/Layout"
import Link from "next/link"

export default function Memories() {
    return (
        <Layout headerStyle={1} footerStyle={1}>
            <div>
               

                {/* MEMORY SECTION */}
                <div className="memory-inner-section-area sp1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-6">
                                <div className="memory3-boxarea">
                                    <div className="img1">
                                        <img src="/assets/img/all-images/family/img1.png" alt="memory" />
                                    </div>
                                   
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="memory3-boxarea">
                                    <div className="img1">
                                        <img src="/assets/img/all-images/memory/memory-img5.png" alt="memory" />
                                    </div>
                                    
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="memory3-boxarea">
                                    <div className="img1">
                                        <img src="/assets/img/all-images/memory/memory-img6.png" alt="memory" />
                                    </div>
                                   
                                </div>
                            </div>

                          

                             <div className="col-lg-4 col-md-6">
                                <div className="memory3-boxarea">
                                    <div className="img1">
                                        <img src="/assets/img/all-images/memory/memory-img6.png" alt="memory" />
                                    </div>
                                   
                                </div>
                            </div>

                             <div className="col-lg-4 col-md-6">
                                <div className="memory3-boxarea">
                                    <div className="img1">
                                        <img src="/assets/img/all-images/memory/memory-img6.png" alt="memory" />
                                    </div>
                                   
                                </div>
                            </div>

                         
                        </div>
                    </div>
                </div>

             

            </div>
        </Layout>
    )
}