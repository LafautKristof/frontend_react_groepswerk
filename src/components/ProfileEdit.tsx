import styles from "../css/ProfileEdit.module.css";
import React from "react";

const ProfileEdit: React.FC = () => {
    return (
        <>
            <div className={styles.profile_edit_container}>
                <div className={styles.sidebar}>
                    <h3>Manage My Account</h3>
                    <ul>
                        <li className={styles.active}>My Profile</li>
                        <li>Address Book</li>
                        <li>My Payment Options</li>
                    </ul>
                    <h3>My Orders</h3>
                    <ul>
                        <li>My Returns</li>
                        <li>My Cancellations</li>
                    </ul>
                    <h3>My WishList</h3>
                </div>
                <div className={styles.profile_edit_form}>
                    <h2>Edit Your Profile</h2>
                    <form>
                        <div className={styles.first_section}>
                            <div className={styles.form_group_short}>
                                <label>First Name</label>
                                <input type="text" value="Md" />
                            </div>
                            <div className={styles.form_group_short}>
                                <label>Last Name</label>
                                <input type="text" value="Rimel" />
                            </div>
                            <div className={styles.form_group_short}>
                                <label>Email</label>
                                <input
                                    type="email"
                                    value="rimel111@gmail.com"
                                />
                            </div>
                            <div className={styles.form_group_short}>
                                <label>Address</label>
                                <input
                                    type="text"
                                    value="Kingston, 5236, United State"
                                />
                            </div>
                        </div>
                        <div className={styles.second_section}>
                            <label>Password Changes</label>
                            <div className={styles.form_group_long}>
                                <input
                                    type="password"
                                    placeholder="Current Password"
                                />
                            </div>
                            <div className={styles.form_group_long}>
                                <input
                                    type="password"
                                    placeholder="New Password"
                                />
                            </div>
                            <div className={styles.form_group_long}>
                                <input
                                    type="password"
                                    placeholder="ConfirmNew Password"
                                />
                            </div>
                        </div>
                    </form>{" "}
                    <div className={styles.form_actions}>
                        <button type="button" className="cancel-button">
                            Cancel
                        </button>
                        <button type="submit" className="save-button">
                            Save Changes
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProfileEdit;
