const redirections = {
    HomePage: {
        redirectionType: "HomePage",
        params: JSON.stringify({}),
        clearNavigationStack: true,
    },
    ProfilePage: {
        redirectionType: "ProfilePage",
        params: JSON.stringify({})
    },
    OnboardingLandingPage: {
        redirectionType: "OnboardingLandingPage",
        params: JSON.stringify({ serviceName: "Home Loan Application" })
    },
    PersonalDetailsPage: {
        redirectionType: "PersonalDetailsPage",
        params: JSON.stringify({})
    },
    DocumentationUploadPage: {
        redirectionType: "DocumentationUploadPage",
        params: JSON.stringify({})
    },
    EmploymentDetailsPage: {
        redirectionType: "EmploymentDetailsPage",
        params: JSON.stringify({})
    },
    ProductDetailsPage: {
        redirectionType: "ProductDetailsPage",
        params: JSON.stringify({ id: 619 })
    },
    LoginPage: {
        redirectionType: "LoginPage",
        params: JSON.stringify({})
    },
    LaunchUrl: {
        redirectionType: "LaunchUrl",
        params: JSON.stringify({ url: "https://flutterflow.io" })
    }
};

module.exports = redirections;