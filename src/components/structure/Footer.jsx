
const Index = () => {

    return (<footer className="footer bg-gray-900 relative pt-1 border-b-2 border-gray-700">
                <div className="container mx-auto px-6">
                    <div className=" border-t-2 border-gray-900 flex flex-col items-center">
                        <div className="sm:w-2/3 text-center py-6">
                            <p className="text-sm text-gray-700 font-bold mb-2">
                                © {new Date().getFullYear()} NaNLABS - by Santiago Tortu
                            </p>
                        </div>
                    </div>
                </div>
            </footer>)
}

export default Index
