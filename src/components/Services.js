import { CgWebsite } from "@react-icons/all-files/cg/CgWebsite";
import { FcSearch,FcTemplate ,FcCommandLine ,FcSettings ,FcOk} from "react-icons/fc";
export default function Services() {
    return(
        <section id="services" className="servies-part">
        <div className="text-center mt-5 pt-4"><h2>Services</h2></div>
        <div className="container-1">
            <div className="row">
                <div className="col-lg-4 mt-4">
                    <div className="card">
                        <div className="icon-sev"><CgWebsite /></div>
                        <h4 className="card-title">website Developerment</h4>
                        <div><p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up the bulk of the card's content.</p></div>
                    </div>
                </div>
                <div className="col-lg-4 mt-4">
                    <div className="card">
                        <div className="icon-sev"><FcCommandLine /></div>
                        <h4 className="card-title">Website Design</h4>
                        <div><p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up the bulk of the card's content.</p></div>
                    </div>
                </div>
                <div className="col-lg-4 mt-4">
                    <div className="card">
                        <div className="icon-sev"><FcTemplate /></div>
                        <h4 className="card-title">Website Deployments</h4>
                        <div><p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up the bulk of the card's content.</p></div>
                    </div>
                </div>
            </div>
        </div>

        <div className="container-1">
            <div className="row">
                <div className="col-lg-4 mt-4">
                    <div className="card">
                        <div className="icon-sev"><FcSearch /></div>
                        <h4 className="card-title">SEO</h4>
                        <div><p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up the bulk of the card's content.</p></div>
                    </div>
                </div>
                <div className="col-lg-4 mt-4">
                    <div className="card">
                        <div classNameName="icon-sev"><FcSettings /></div>
                        <h4 className="card-title">dev ops</h4>
                        <div><p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up the bulk of the card's content.</p></div>
                    </div>
                </div>
                <div className="col-lg-4 mt-4">
                    <div className="card">
                        <div className="icon-sev"><FcOk /></div>
                        <h4 className="card-title">question Answer</h4>
                        <div><p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up the bulk of the card's content.</p></div>
                    </div>
                </div>
            </div>
        </div>

    </section>
    )
}