import { cookies } from "next/headers";
import { verifyAdminToken } from "@/server/auth/admin";
import AdminClient from "./admin-client";

const AdminPage = async () => {
	const cookieStore = await cookies();
	const adminToken = cookieStore.get("admin-token");
	const initialIsAdmin = adminToken?.value
		? verifyAdminToken(adminToken.value)
		: false;

	return <AdminClient initialIsAdmin={initialIsAdmin} />;
};

export default AdminPage;
