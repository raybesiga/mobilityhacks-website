import React from 'react';
import Modal from '../../layout/Modal/Modal';

const titletext = 'IF YOU HAVE ANY QUESTIONS OR SUGGESTIONS OR YOU NEED ANY FURTHER INFORMATION, ' +
    'FEEL FREE TO CONTACT US. SHOOT US AN QUICK EMAIL AND WE WILL GET BACK TO YOU.' +
    '<br /><br />' +
    '<a href="mailto:hello@mobility-hacks.de">SEND US AN EMAIL</a>' +
    '<br /><br />' +
    'Why us, I don\'t know! We are all huge fans of Hackathons and want to share ' +
    'the joy we had at other events. So we decided to host our own. This is our 2nd Hackathon in Berlin, ' +
    'we are Hackerstolz and we hope you like our super cool events.<br />';

class ModalView extends React.Component {
    render() {
        return (
            <div id="organizers" className="organizers content-container">
                <Modal
                    header='Station 7'
                    title='Organizers'
                    titletext={titletext}
                >
                    <fieldset className="fieldset">
                        <legend>Organizers</legend>
                        <div className="fieldset__container">
                            <div className="fieldset__container-wrapper">
                                <div className="circle-image__container--big">

                                    <img className="circle-image" src={require('./pictures/iris_broese_bw.png')}/>
                                    <p className="image-text-title">Iris Bröse</p>
                                    <p className="image-text">Sponsors, Planning, Interior, Catering</p>
                                </div>
                                <div className="circle-image__container--big">
                                    <img className="circle-image" src={require('./pictures/oezden_gelgec_bw.png')}/>
                                    <p className="image-text-title">Özden Gelgeç</p>
                                    <p className="image-text">Identity, Interior Design</p>
                                </div>
                                <div className="circle-image__container--big">
                                    <img className="circle-image" src={require('./pictures/alex_bw.png')}/>
                                    <p className="image-text-title">Alexander Müller</p>
                                    <p className="image-text">Finance, Moderation, Planning</p>
                                </div>
                                <div className="circle-image__container--big">
                                    <img className="circle-image" src={require('./pictures/daniel_seiler_bw.png')}/>
                                    <p className="image-text-title">Daniel Seiler</p>
                                    <p className="image-text">Identity</p>
                                </div>
                                <div className="circle-image__container--big">
                                    <img className="circle-image" src={require('./pictures/frederik_chettouh_bw.png')}/>
                                    <p className="image-text-title">Frederik Chettouh</p>
                                    <p className="image-text">Sponsors, Service, Moderation</p>
                                </div>
                                <div className="circle-image__container--big">
                                    <img className="circle-image" src={require('./pictures/nico_ring_bw.png')}/>
                                    <p className="image-text-title">Nico Ring</p>
                                    <p className="image-text">Sponsors, Tech Partnerships, Infrastructure</p>
                                </div>
                                <div className="circle-image__container--big">

                                    <img className="circle-image" src={require('./pictures/sebastian_waschnick_bw.png')}/>
                                    <p className="image-text-title">Sebastian Waschnick</p>
                                    <p className="image-text">Tech Partnerships, Website</p>
                                </div>
                            </div>
                        </div>
                    </fieldset>
                </Modal>
            </div>
        );
    }
}

export default ModalView;
