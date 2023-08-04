import { useState } from "react"
import CreateAccountForm from "./forms/CreateAccountForm";
import LoginForm from "./forms/LoginForm";

export default function UnloggedPage() {
    const [showCreateAccountForm, setShowCreateAccountForm] = useState(false);
    const [showLoginForm, setShowLoginForm] = useState(false);

    return (
        <>
            <div className={`md:flex justify-center items-center w-screen min-h-screen bg-black text-white font-bold ${showCreateAccountForm || showLoginForm ? 'hidden' : 'flex'}`}>
                <div className="w-full px-5 sm:w-2/3 md:w-1/3 h-full flex flex-col items-center md:items-start gap-2 pt-20">
                <svg className="mb-10" fill="#ffffff" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" 
                        width="80px" height="80px" viewBox="0 0 247.632 247.633"
                        >
                        <g>
                            <path d="M245.857,165.604c-18.749-3.878-28.372-8.643-33.248-12.212c7.081,0.289,14.646-3.115,15.096-3.328
                                c1.017-0.467,1.52-1.62,1.177-2.678c-0.343-1.063-1.407-1.708-2.53-1.495c-11.562,2.169-18.389-8.204-22.916-15.084
                                c-0.573-0.887-1.105-1.697-1.613-2.418c-11.143-16.106-27.45-16.674-32.226-16.456c-11.674-15.368-38.231-15.761-39.301-15.761
                                c-12.682-0.617-16.453-3.203-17.307-3.934c1.436-13.754-3.142-24.077-7.306-30.372c0.127,0.077,0.254,0.156,0.381,0.248
                                c0.757,0.502,1.773,0.476,2.518-0.068c0.745-0.538,1.079-1.478,0.836-2.374c-2.536-9.306-11.786-17.534-18.562-22.502
                                c0.889,0.145,1.832-0.284,2.293-1.108c0.491-0.884,0.325-1.974-0.393-2.669c-15.241-14.685-33.103-12.619-38.845-11.47
                                c-2.5-3.842-8.99-8.021-11.222-9.386c-0.958-0.588-2.27-0.449-2.956,0.434c-0.594,0.75-0.671,1.717-0.192,2.482
                                c-0.813-0.414-1.8-0.292-2.482,0.325c-0.704,0.629-0.925,1.64-0.556,2.518c1.259,2.929,0.493,9.315-0.021,12.215
                                c-5.391,6.046-10.887,22.357-11.73,24.914l-2.16,3.153c-1.977,2.82-2.669,6.8-1.814,10.403c0.611,2.574,1.906,4.51,3.656,5.441
                                c4.25,2.293,7.849,2.678,10.708,1.159c2.733-1.46,3.91-4.279,4.412-6.109c6.978-1.525,12.383-7.347,14.75-10.314
                                c1.809,1.421,2.988,3.431,3.582,6.103c1.895,8.538-3.026,20.439-6.312,24.701c-6.076,7.885-6.682,21.412-6.694,26.128
                                c-8.116,2.409-17.984-0.721-18.406-0.842c-6.348-1.011-11.209-0.207-14.375,2.361c-3.124,2.53-3.366,5.796-3.36,5.926
                                c-1.59,10.326-6.741,16.633-6.789,16.692c-0.121,0.142-0.219,0.312-0.298,0.467c-3.854,8.127,0.115,17.277,1.12,19.346
                                l1.103,11.537c0.727,2.59,1.977,4.327,3.727,5.16c2.101,1,4.001,0.23,4.318,0.077c2.935-1.46,4.871-3.683,5.766-6.614
                                c2.016-6.59-2.287-14.333-2.474-14.658c-0.271-0.479-0.709-0.84-1.235-1.011l-1.017-0.325c0.446-12.986,3.893-18.619,6.774-21.072
                                c1.052-0.893,2.075-1.383,2.988-1.708c-0.712,1.696-1.271,3.534-1.584,4.788c-0.177,4.374-1.437,8.979-1.761,10.096
                                c-4.794,7.949-0.721,13.21-0.547,13.435c0.139,0.16,0.298,0.313,0.473,0.426c2.193,1.507,4.001,5.485,4.643,7.211
                                c0.624,7.962,6.041,10.994,6.245,11.106c1.02,0.567,1.909,0.763,2.66,0.763c0.984,0,1.729-0.337,2.185-0.627
                                c3.171-2.074,2.964-8.417,2.722-10.657c0.357-4.007-0.494-7.039-2.53-9.008c-1.093-1.069-2.323-1.625-3.408-1.903
                                c0.225-2.477-0.186-5.101-0.325-5.869c-2.985-11.964,5.078-14.594,6.035-14.865c0.127-0.03,0.168-0.166,0.284-0.219
                                c6.682,1.844,15.465,2.866,25.186,0.526c24.198,25.581,48.122,26.977,52.96,26.977c0.053,0,0.053,0,0.101,0
                                c0.479,1.017,0.958,1.998,1.413,2.914c2.79,5.573,9.121,15.314,9.345,15.669c4.994,8.328,5.278,13.021,4.634,15.504
                                c-0.473,1.826-1.495,2.513-1.454,2.513l0,0c-9.3,3.818-13.21,7.849-14.706,9.889c-11.934,0.076-15.56,4.22-15.971,4.746
                                c-2.199,2.908-4.504,6.572-2.805,9.126c0.254,0.384,0.559,0.68,0.893,0.91c-1.915,2.151-1.788,4.008-1.333,5.178
                                c1.531,3.996,9.153,5.007,11.003,5.143c0.564,0.177,1.132,0.254,1.702,0.254c0.955,0,1.9-0.248,2.79-0.738
                                c2.813-1.555,4.522-5.314,5.296-7.466c3.697-0.49,7.51-2.37,7.693-2.453c0.44-0.225,0.804-0.597,1.011-1.04
                                c4.687-9.954,15.568-15.273,17.431-16.124c5.166-0.621,8.843-2.536,10.935-5.71c3.009-4.587,1.378-9.966,1.206-10.409
                                c-6.012-13.618-1.986-20.463-1.135-21.681c23.768-16.042,24.293-32.905,23.53-39.053c1.188-0.083,2.158,0.166,2.927,0.745
                                c3.18,2.364,3.339,10.001,3.439,15.066c0.035,1.809,0.071,3.393,0.207,4.533c1.135,9.487,5.255,16.391,12.206,20.528
                                c18.004,10.675,48.622-1.3,49.922-1.814c0.904-0.372,1.478-1.271,1.389-2.252C247.517,166.602,246.808,165.81,245.857,165.604z
                                M27.144,152.085c0.298,1.714,0.491,4.806-0.047,5.993c-0.328,0.728-0.242,1.572,0.23,2.217c0.473,0.633,1.271,0.976,2.045,0.881
                                c0.012,0,1.646-0.13,2.754,0.939c1.282,1.254,1.362,3.659,1.203,5.846c0.26,2.908-0.106,6.349-0.999,6.656
                                c-0.15-0.095-3.667-2.176-4.01-7.838c-0.012-0.201-0.05-0.402-0.115-0.592c-0.242-0.674-2.355-6.584-6.047-9.403
                                c-0.455-0.792-1.773-3.777,1.114-8.405c0.101-0.16,0.18-0.343,0.233-0.514c0.08-0.243,1.8-5.917,1.951-10.982
                                c0.502-1.826,1.253-3.801,1.814-4.889c1.218,0.633,2.846,1.413,4.879,2.229C28.651,136.794,24.62,142.02,27.144,152.085z
                                M198.565,167.831c-5.698-3.398-9.091-9.203-10.072-17.259c-0.124-1.029-0.136-2.447-0.171-4.091
                                c-0.131-6.277-0.313-14.871-5.22-18.53c-2.287-1.702-5.22-2.086-8.742-1.105c-0.567,0.16-1.052,0.55-1.342,1.059
                                c-0.283,0.514-0.366,1.135-0.194,1.69c0.225,0.763,5.047,18.914-21.587,36.735c-0.159,0.106-0.319,0.242-0.443,0.384
                                c-0.312,0.366-7.459,8.973,0.207,26.327c0.012,0.035,1.064,3.617-0.786,6.419c-1.365,2.093-4.078,3.363-8.038,3.776
                                c-0.219,0.018-0.426,0.083-0.633,0.16c-0.562,0.236-13.601,5.811-19.633,17.715c-1.554,0.691-4.533,1.809-6.711,1.809
                                c-0.999,0-1.871,0.668-2.137,1.643c-0.443,1.632-1.927,5.309-3.656,6.266c-0.364,0.189-0.674,0.23-1.496,0.029
                                c-3.476-0.337-7.306-1.519-7.716-2.299c0.012-0.083,0.133-0.379,0.804-1.146l1.924-2.997c0.497-0.763,0.467-1.756-0.065-2.494
                                c-0.52-0.722-1.43-1.059-2.282-0.857c0.278-0.662,0.884-1.767,2.185-3.481c0.029-0.029,2.899-3.079,12.803-3.079
                                c0.301,0,0.647-0.03,0.919,0.006c0.833,0,1.616-0.503,1.998-1.253c0.018-0.042,2.42-4.552,13.346-9.05
                                c0.278-0.136,2.737-1.46,3.807-5.101c1.401-4.829-0.289-11.296-5.083-19.299c-0.071-0.095-6.46-9.954-9.135-15.297
                                c-2.935-5.876-6.579-13.176-2.675-23.584c0.429-1.135-0.151-2.412-1.297-2.844c-1.144-0.432-2.42,0.143-2.849,1.289
                                c-3.009,8.015-2.172,14.451-0.375,19.719c-6.567-0.391-26.256-3.512-46.435-23.934c5.396-1.891,10.991-4.87,16.633-9.422
                                c0.943-0.768,1.093-2.163,0.325-3.12c-0.768-0.952-2.166-1.105-3.118-0.331c-27.364,22.159-53.188,5.379-54.279,4.657
                                c-0.26-0.171-0.549-0.296-0.86-0.354c-0.192-0.018-4.915-0.78-9.496,3.021c-5.461,4.539-8.322,13.323-8.505,26.114
                                c-0.012,0.969,0.6,1.826,1.513,2.127l1.708,0.574c0.872,1.82,2.894,6.667,1.726,10.468c-0.535,1.731-1.685,3.021-3.343,3.859
                                c-0.029,0.012-0.34,0.124-0.641-0.054c-0.242-0.123-0.848-0.608-1.259-1.944l-1.07-11.562c-0.032-0.295-0.115-0.579-0.257-0.839
                                c-0.047-0.089-4.483-8.553-1.342-15.558c1.07-1.371,5.949-8.098,7.595-18.838c0-0.012,0.145-1.643,1.755-2.937
                                c2.119-1.726,5.884-2.222,10.557-1.501c0.509,0.163,12.644,4.055,22.485,0.168c0.872-0.346,1.433-1.203,1.398-2.143
                                c-0.006-0.163-0.55-16.728,5.757-24.905c4.368-5.666,9.271-18.667,7.128-28.369c-1.022-4.602-3.594-8.086-7.438-10.072
                                c-1.011-0.52-2.231-0.195-2.855,0.739c-0.062,0.095-6.416,9.448-14.479,10.379c-1.034,0.127-1.847,0.946-1.944,1.98
                                c0,0.03-0.405,3.263-2.427,4.339c-1.82,0.981-4.557-0.083-6.531-1.138c-0.44-0.237-1.088-1.053-1.445-2.571
                                c-0.564-2.379-0.115-5.048,1.15-6.859l2.361-3.426c0.121-0.174,0.215-0.375,0.284-0.573c1.682-5.219,6.978-19.703,11.233-23.956
                                c0.31-0.311,0.52-0.704,0.605-1.138c0.133-0.68,0.925-4.826,0.901-9.026c0.556,0.473,1.339,0.636,2.057,0.432
                                c0.993-0.298,1.646-1.253,1.575-2.284c-0.042-0.556-0.091-1.082-0.145-1.578c2.988,2.258,5.228,4.412,5.399,5.343
                                c0.106,0.624,0.47,1.162,1.011,1.496c0.532,0.333,1.191,0.416,1.785,0.248c0.168-0.062,15.519-4.365,30.23,5.077
                                c-0.774,0.032-1.481,0.139-2.057,0.352c-0.81,0.302-1.374,1.041-1.445,1.895c-0.074,0.86,0.364,1.682,1.111,2.113
                                c0.178,0.104,14.854,8.502,21.421,19.059c-1.889-0.792-3.65-1.203-4.915-0.831c-0.769,0.236-1.354,0.866-1.519,1.649
                                c-0.168,0.786,0.104,1.602,0.709,2.134c0.145,0.13,14.295,12.755,11.677,34.46c-0.044,0.349,0,0.694,0.121,1.022
                                c0.514,1.427,3.6,6.174,21.551,7.027c0.266,0,26.58,0.373,36.528,14.89c0.467,0.688,1.282,1.058,2.093,0.948
                                c0.188-0.012,18.01-1.998,29.394,14.484c0.485,0.697,0.999,1.484,1.549,2.329c3.311,5.042,8.151,12.401,15.469,15.699
                                c-3.121,0.242-6.165-0.13-8.175-1.892c-0.721-0.627-1.768-0.715-2.601-0.236c-0.815,0.49-1.229,1.454-1.017,2.399
                                c0.271,1.206,3.439,11.296,33.738,18.956C227.267,170.976,209.695,174.451,198.565,167.831z"/>
                        </g>
                </svg>
                    <p className="text-center md:text-start text-6xl mb-10">Ne ratez rien de l'actualité mondiale !</p>
                    <p className="text-2xl mb-5">Rejoignez *APP-NAME* dès maintenant.</p>
                    <button type="button" className="w-full lg:w-1/2  py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700">S'inscrire avec Google</button>
                    <button type="button" className="w-full lg:w-1/2  py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700">S'inscrire avec Apple</button>
                    <div className="flex gap-1 justify-center items-center w-1/2">
                        <div className="h-px bg-slate-400 w-1/2"></div>
                        <span>ou</span>
                        <div className="h-px bg-slate-400 w-1/2"></div>
                    </div>
                    <button onClick={() => setShowCreateAccountForm(true)} type="button" className="w-full lg:w-1/2 bg-blue-600 py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full hover:bg-blue-800 hover:text-white">Créer un compte</button>
                    <p className="text-xs w-full text-justify sm:w-2/3 italic text-gray-500 mb-10">En vous inscrivant, vous sauvez un arbre de la noyade et la Politique de confidentialité, notamment l'Utilisation des cookies.</p>
                    <p className="mb-2 text-center sm:text-start">Vous avez déjà un compte ?</p>
                    <button onClick={() => setShowLoginForm(true)} type="button" className="w-full lg:w-1/2 py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-white bg-transparent rounded-full border border-white hover:border-blue-500 hover:text-blue-500">Se connecter</button>
                </div>
            </div>
            {/* MASK DIV */}
            <div id="mask_div" className={`hidden absolute z-10 bg-black w-screen h-screen top-0 left-0 opacity-60 ${showCreateAccountForm || showLoginForm ? 'md:block' : 'hidden'}`}></div>
            {showCreateAccountForm && 
                <CreateAccountForm 
                    setShowCreateAccountForm={setShowCreateAccountForm}
                />}
            {showLoginForm && 
                <LoginForm 
                    setShowLoginForm={setShowLoginForm}
            />}
            
        </>
    )
}

